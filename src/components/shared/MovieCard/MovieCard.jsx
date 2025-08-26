import { useRef, useState } from "react";
import { Play, Clock, X, Download, Printer, Copy, Check } from "lucide-react";
import { FaShareFromSquare } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("stripe");
  const [rentDuration, setRentDuration] = useState("24");
  const [linkCopied, setLinkCopied] = useState(false);
  const qrRef = useRef(null);

  // Format duration from minutes to hours and minutes
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Calculate rent price based on duration
  const getRentPrice = (hours) => {
    const basePrice = movie.rent_price;
    switch (hours) {
      case "3":
        return (basePrice * 0.5).toFixed(2);
      case "6":
        return (basePrice * 0.7).toFixed(2);
      case "12":
        return (basePrice * 0.85).toFixed(2);
      case "24":
        return basePrice.toFixed(2);
      default:
        return basePrice.toFixed(2);
    }
  };

  // Generate movie link (placeholder)
  const movieLink = `https://movieapp.com/movie/${movie.id}`;

  // Handle copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(movieLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // Download QR Code as SVG
  const handleDownloadQR = () => {
    const qrCodeSvg = generateQRCodeSVG(movieLink);
    const blob = new Blob([qrCodeSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${movie.title}-qr-code.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Print QR Code
  const handlePrintQR = () => {
    const qrCodeSvg = generateQRCodeSVG(movieLink);
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>QR Code - ${movie.title}</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              min-height: 100vh; 
              font-family: Arial, sans-serif;
            }
            .container { text-align: center; }
            h1 { margin-bottom: 20px; color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>${movie.title}</h1>
            ${qrCodeSvg}
            <p style="margin-top: 20px; color: #666;">${movieLink}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Generate QR Code SVG (Simple implementation - in production use a proper QR library)
  const generateQRCodeSVG = (text) => {
    // Simple QR-like pattern generator for demo
    const size = 25;
    const cellSize = 8;
    const totalSize = size * cellSize;

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash + text.charCodeAt(i)) & 0xffffffff;
    }

    let svg = `<svg width="${totalSize}" height="${totalSize}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${totalSize}" height="${totalSize}" fill="white"/>`;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const seed = (hash + row * size + col) & 0xffffffff;
        const shouldFill = seed % 2 === 0 || isCornerSquare(row, col, size);

        if (shouldFill) {
          const x = col * cellSize;
          const y = row * cellSize;
          svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
        }
      }
    }

    svg += "</svg>";
    return svg;
  };

  const isCornerSquare = (row, col, size) => {
    // Top-left corner
    if (row < 7 && col < 7) {
      return (
        row === 0 ||
        row === 6 ||
        col === 0 ||
        col === 6 ||
        (row >= 2 && row <= 4 && col >= 2 && col <= 4)
      );
    }
    // Top-right corner
    if (row < 7 && col >= size - 7) {
      return (
        row === 0 ||
        row === 6 ||
        col === size - 1 ||
        col === size - 7 ||
        (row >= 2 && row <= 4 && col >= size - 5 && col <= size - 3)
      );
    }
    // Bottom-left corner
    if (row >= size - 7 && col < 7) {
      return (
        row === size - 1 ||
        row === size - 7 ||
        col === 0 ||
        col === 6 ||
        (row >= size - 5 && row <= size - 3 && col >= 2 && col <= 4)
      );
    }
    return false;
  };

  // Modal backdrop component
  const ModalBackdrop = ({ children, onClose }) => (
    <div
      className="fixed inset-0 bg-black/70 bg-opacity-10 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#272727] rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  // QR Code component
  const QRCode = ({ url }) => {
    const pattern = generateQRPattern(url);

    return (
      <div
        className="w-48 h-48 flex items-center justify-center mx-auto mb-6"
        ref={qrRef}
      >
        <div className="w-44 h-44 bg-white p-2 rounded-lg">
          <div
            className="w-full h-full grid gap-0"
            style={{ gridTemplateColumns: "repeat(25, 1fr)" }}
          >
            {pattern.map((isBlack, index) => (
              <div
                key={index}
                className={`aspect-square ${isBlack ? "bg-black" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Generate QR Code pattern based on URL
  const generateQRPattern = (url) => {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
      const char = url.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    const pattern = [];
    const size = 25;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const index = row * size + col;
        const seed = (hash + index * 7) % 1000;

        // Corner squares
        if (isCornerSquare(row, col, size)) {
          const isBorder =
            (row < 7 &&
              col < 7 &&
              (row === 0 || row === 6 || col === 0 || col === 6)) ||
            (row < 7 &&
              col >= size - 7 &&
              (row === 0 ||
                row === 6 ||
                col === size - 1 ||
                col === size - 7)) ||
            (row >= size - 7 &&
              col < 7 &&
              (row === size - 1 || row === size - 7 || col === 0 || col === 6));

          const isInnerSquare =
            (row >= 2 && row <= 4 && col >= 2 && col <= 4) ||
            (row >= 2 && row <= 4 && col >= size - 5 && col <= size - 3) ||
            (row >= size - 5 && row <= size - 3 && col >= 2 && col <= 4);

          pattern.push(isBorder || isInnerSquare);
        } else {
          pattern.push(seed < 500);
        }
      }
    }

    return pattern;
  };

  return (
    <>
      <div className="bg-[#272727] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Movie Poster with Trailer Button */}
        <div className="relative aspect-[16/10] p-4 pb-0">
          <img
            src={movie.thumbnail_url}
            alt={movie.title}
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />

          {/* Trailer Button Overlay */}
          <div className="absolute bottom-3 left-7">
            <button className="bg-[#B9341C] text-white px-3 py-1.5 rounded-4xl flex items-center gap-2 text-sm font-medium hover:bg-[#9e2e18] transition-colors duration-200">
              <Play size={14} fill="white" />
              Trailer
            </button>
          </div>
        </div>

        {/* Movie Details */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-white text-lg font-bold leading-tight">
            {movie.title}
          </h3>

          {/* Movie Info */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="capitalize">{movie.type}</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{formatDuration(movie.duration)}</span>
            </div>
          </div>

          {/* Logline */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {movie.logline.length > 60
              ? `${movie.logline.substring(0, 60)}...`
              : movie.logline}
          </p>

          {/* Pricing */}
          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Rent</span>
              <span className="text-white font-medium">
                ${movie.rent_price}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Buy</span>
              <span className="text-white font-medium">${movie.buy_price}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3">
            <button
              onClick={() => setShowRentModal(true)}
              className="flex-1 bg-bluePrimary hover:bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200"
            >
              Rent
            </button>
            <button
              onClick={() => setShowBuyModal(true)}
              className="flex-1 bg-transparent border border-bluePrimary hover:border-blue-500 text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200"
            >
              Buy
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-transparent   text-bluePrimary p-2.5 rounded-md transition-colors duration-200"
            >
              <FaShareFromSquare size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Share Modal */}
      {showShareModal && (
        <ModalBackdrop onClose={() => setShowShareModal(false)}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-bold">Share Movie</h2>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <QRCode url={movieLink} />

            <div className="flex gap-3 mb-6">
              <button
                onClick={handleDownloadQR}
                className="flex-1 bg-[#00A1FF] hover:bg-[#0090e6] text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download
              </button>
              <button
                onClick={handlePrintQR}
                className="flex-1 bg-transparent border border-[#00A1FF] hover:border-[#0090e6] text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Printer size={16} />
                Print
              </button>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className={`p-2 rounded transition-colors duration-200 ${
                  linkCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#00A1FF] hover:bg-[#0090e6] text-white"
                }`}
              >
                {linkCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <input
                type="text"
                value={movieLink}
                readOnly
                className="flex-1 bg-transparent text-gray-300 text-sm outline-none ml-2"
              />
            </div>
          </div>
        </ModalBackdrop>
      )}

      {/* Buy Modal */}
      {showBuyModal && (
        <ModalBackdrop onClose={() => setShowBuyModal(false)}>
          <div className="p-6 bg-white">
            <div className="flex justify-between items-center mb-6 ">
              <h2 className="text-black text-xl font-bold">
                Buy {movie.title}
              </h2>

              <button
                onClick={() => setShowBuyModal(false)}
                className="text-black/70 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm font-medium mb-3">
                Amount ($)
              </label>
              <input
                type="text"
                value={`$${movie.buy_price}`}
                readOnly
                className="w-full bg-white border border-[#989898] text-black rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div className="space-y-3 mb-6">
              {[
                { id: "stripe", name: "Stripe" },
                { id: "paypal", name: "PayPal" },
                { id: "reelbux", name: "ReelBux" },
              ].map((method) => (
                <label
                  key={method.id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedPaymentMethod === method.id}
                    onChange={() => setSelectedPaymentMethod(method.id)}
                    className="hidden"
                  />
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-colors duration-200 ${
                      selectedPaymentMethod === method.id
                        ? "bg-[#00A1FF] border-[#00A1FF]"
                        : "bg-white border-[#00A1FF]"
                    }`}
                  >
                    {selectedPaymentMethod === method.id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-black">{method.name}</span>
                </label>
              ))}
            </div>

            <button
              onClose={() => setShowBuyModal(false)}
              className="w-full bg-[#00A1FF] hover:bg-[#0090e6] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Pay
            </button>
          </div>
        </ModalBackdrop>
      )}

      {/* Rent Modal */}
      {showRentModal && (
        <ModalBackdrop onClose={() => setShowRentModal(false)}>
          <div className="p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-blackPrimary text-xl font-bold">Rent</h2>
              <button
                onClick={() => setShowRentModal(false)}
                className="text-black/70 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-blackPrimary text-sm font-medium mb-3">
                Rent Time
              </label>
              <select
                value={rentDuration}
                onChange={(e) => setRentDuration(e.target.value)}
                className="w-full bg-white border border-text-blackPrimary text-blackPrimary rounded-lg px-3 py-2 outline-none "
              >
                <option value="3">3 Hours</option>
                <option value="6">6 Hours</option>
                <option value="12">12 Hours</option>
                <option value="24">24 Hours</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-blackPrimary text-sm font-medium mb-3">
                Amount ($)
              </label>
              <input
                type="text"
                value={`$${getRentPrice(rentDuration)}`}
                readOnly
                className="w-full bg-white border border-black text-blackPrimary rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div className="space-y-3 mb-6">
              {[
                { id: "stripe", name: "Stripe" },
                { id: "paypal", name: "PayPal" },
                { id: "reelbux", name: "ReelBux" },
              ].map((method) => (
                <label
                  key={method.id}
                  className="flex items-center gap-3 cursor-pointer text-blackPrimary"
                >
                  <input
                    type="checkbox"
                    checked={selectedPaymentMethod === method.id}
                    onChange={() => setSelectedPaymentMethod(method.id)}
                    className="hidden"
                  />
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-colors duration-200 ${
                      selectedPaymentMethod === method.id
                        ? "bg-[#00A1FF] border-[#00A1FF]"
                        : "bg-white border-[#00A1FF]"
                    }`}
                  >
                    {selectedPaymentMethod === method.id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-blackPrimary">{method.name}</span>
                </label>
              ))}
            </div>

            <button className="w-full bg-[#00A1FF] hover:bg-[#0090e6] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
              Pay
            </button>
          </div>
        </ModalBackdrop>
      )}
    </>
  );
};

export default MovieCard;

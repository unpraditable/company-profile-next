import { CompletedProduct } from "../interfaces/ProductInterface";

const ProductPopup = ({
  selectedProduct,
  setSelectedProduct,
}: {
  selectedProduct: CompletedProduct;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setSelectedProduct: Function;
}) => {
  return (
    <>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">
                  {selectedProduct.name || "Unnamed Product"}
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {selectedProduct.image ? (
                <img
                  className="w-full h-64 object-cover rounded mb-4"
                  src={selectedProduct.image}
                  alt={selectedProduct.name || "Product image"}
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center mb-4">
                  No Image Available
                </div>
              )}

              <div className="space-y-2">
                <p>
                  <strong>ID:</strong> {selectedProduct.id}
                </p>
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedProduct.name || "Not specified"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPopup;

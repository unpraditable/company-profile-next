import { CompletedProduct } from "../interfaces/ProductInterface";

const ProductPopup = ({
  selectedProduct,
  setSelectedProduct,
}: {
  selectedProduct: CompletedProduct | null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setSelectedProduct: Function;
}) => {
  return (
    <>
      {selectedProduct && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-end mb-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>

              {selectedProduct.image ? (
                <img
                  className="w-full h-64 object-cover rounded mb-4 lg:h-96"
                  src={selectedProduct.image}
                  alt={
                    selectedProduct.name
                      ? `This is an image of ${selectedProduct.name} in a Popup`
                      : `This is an image of Product Id ${selectedProduct.id} in a Popup`
                  }
                />
              ) : (
                <div className="w-full h-64 lg:h-96 bg-gray-200 rounded flex items-center justify-center mb-4">
                  No Image Available
                </div>
              )}

              <div className="space-y-2">
                <h2 className="text-xl text-center font-bold">
                  {`#${selectedProduct.id} - ${
                    selectedProduct.name ?? "Unnamed Product"
                  }`}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPopup;

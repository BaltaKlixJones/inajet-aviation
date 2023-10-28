export const extractKilometersH = (data) => {
  const kmRegex = /\d+\s*km\/h/g;
  const kmMatch = data.match(kmRegex);
  return kmMatch ? kmMatch[0] : "";
};

export const extractKilometers = (data) => {
  const kmRegex = /\d+\s*km/;
  const kmMatch = data.match(kmRegex);
  return kmMatch ? kmMatch[0] : "";
};

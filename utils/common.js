const mockImg = [
  'https://images.pexels.com/photos/1958734/pexels-photo-1958734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3082731/pexels-photo-3082731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1601773/pexels-photo-1601773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1719233/pexels-photo-1719233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1719233/pexels-photo-1719233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const mockDes = [
  'Special offer big sale colorful background. Logo design',
  'Tôi sẽ thiết kế logo doanh nghiệp hiện đại, đơn giản trong 24 giờ',
  'Có một cái cây trong một cái vườn Trên những tán cây nở rộ những đóa hoa',
  'Có hai đứa nhóc đang chơi trốn tìm Tìm hoài tìm mãi nên quên lối về',
  'Anh đi tìm thì em trốn, anh đi trốn em không tìm Lòng em không gợn sóng, cuối cùng anh mất công chìm',
];

function ramBetween(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

export const mockCard = () => {
  return {
    img: mockImg[ramBetween(0, 7)],
    description: mockDes[ramBetween(0, 3)],
    rate: Math.random() * 5 + 1,
    rateCount: ramBetween(1, 100000),
    amount: ramBetween(100000, 10000000),
  };
};

export const mockListCard = () => {
  const result = [];
  for (let i = 0; i < 15; i++) {
    result.push(mockCard());
  }
  return JSON.parse(JSON.stringify(result));
};

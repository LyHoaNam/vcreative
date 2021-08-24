export const major = [
  {
    txt: 'Graphic design',
  },
  {
    txt: 'website & app design',
  },
  {
    txt: 'illustrator',
  },
  {
    txt: 'printer service',
  },
  {
    txt: '3D design',
  },
];
export const skillAndService = [
  {
    txt: 'Graphic design',
    key: 'graphic-design',
  },
  {
    txt: 'Thiết kế Bộ nhận dạng thương hiệu',
    key: 'branding',
  },
  {
    txt: 'Thiết kế Namecard',
    key: 'namecard',
  },
  {
    txt: 'Thiết kế Brochure',
    key: 'brochure',
  },
  {
    txt: 'Thiết kế Banner',
    key: 'banner',
  },
  {
    txt: 'Thiết kế Catalog',
    key: 'catalog',
  },
  {
    txt: 'Thiết kế Menu',
    key: 'menu',
  },
  {
    txt: 'Thiết kế Thiệp',
    key: 'thiep',
  },
  {
    txt: 'Thiết kế Postcard',
    key: 'postcard',
  },
  {
    txt: 'Thiết kế truyền thông',
    key: 'media',
  },
  {
    txt: 'Thiết kế Tờ rơi',
    key: 'poster',
  },
];
export const listYear = () => {
  const currentYear = new Date().getFullYear();
  const result = [];
  for (let index = currentYear; index > 1950; index--) {
    result.push(`${index}`);
  }
  return result;
};

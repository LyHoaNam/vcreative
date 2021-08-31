import { funcSiteMap } from './sitemap';
const siteMap = funcSiteMap();
export const footer = [
  [
    {
      txt: 'Về chúng tôi',
      link: siteMap.collaboratorsRegister,
      class: 'font-bold',
    },
    {
      txt: 'Giới thiệu',
      link: siteMap.collaboratorsRegister,
      class: '',
    },
    {
      txt: 'Hướng dẫn',
      link: siteMap.collaboratorsRegister,
      class: '',
    },
    {
      txt: 'Hỗ trợ',
      link: siteMap.collaboratorsRegister,
      class: '',
    },
  ],
  [
    {
      txt: 'Danh mục',
      link: '#',
      class: 'font-bold',
    },
    {
      txt: 'Chợ thiết kế',
      link: '',
      class: '',
    },
    {
      txt: 'Mẹo hay',
      link: '',
      class: '',
    },
    {
      txt: 'Tin tức',
      link: '',
      class: '',
    },
    {
      txt: 'Phản hồi',
      link: '',
      class: '',
    },
  ],
  [
    {
      txt: 'Cộng tác viên',
      link: siteMap.collaboratorsRegister,
      class: 'font-bold',
    },
    {
      txt: 'Trở thành cộng tác viên',
      link: siteMap.collaboratorsRegister,
      class: '',
    },
    {
      txt: 'Trở thành người bán hàng',
      link: siteMap.createServiceSummary,
      class: '',
    },
  ],
  [
    {
      txt: 'Người giới thiệu',
      link: '#',
      class: 'font-bold',
    },
    {
      txt: 'Đăng ký',
      link: '?signup',
      class: '',
    },
    {
      txt: 'Mã giới thiệu',
      link: '',
      class: '',
    },
    {
      txt: 'Tuyển dụng',
      link: '#',
      class: 'font-bold pt-10 block',
    },
    {
      txt: 'Đăng tuyển',
      link: '',
      class: '',
    },
    {
      txt: 'Hướng dẫn',
      link: '',
      class: '',
    },
  ],
];

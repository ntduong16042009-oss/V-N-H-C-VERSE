import libraryHeroImg from './images/library_hero_cinematic_1791554396933.jpg';
import voNhatImg from './images/vo_nhat_cinematic_1791554410974.jpg';
import songImg from './images/song_ocean_cinematic_1791554426521.jpg';
import songDaImg from './images/song_da_river_cinematic_1791554441071.jpg';
import truongBaImg from './images/truong_ba_drama_cinematic_1791554451066.jpg';
import chiPheoImg from './images/chi_pheo_cinematic_1794504765898.jpg';
import tayTienImg from './images/tay_tien_cinematic_1794504765609.jpg';
import binhNgoImg from './images/binh_ngo_dai_cao_cinematic_1794504768262.jpg';
import traoDuyenImg from './images/trao_duyen_cinematic_1794504771138.jpg';
import chuNguoiTuTuImg from './images/chu_nguoi_tu_tu_cinematic_1794504771501.jpg';
import dayThonViDaImg from './images/day_thon_vi_da_cinematic_1794504774642.jpg';
import chiecThuyenNgoaiXaImg from './images/chiec_thuyen_ngoai_xa_cinematic_1794504780299.jpg';

// VĂN HỌCVERSE Galaxy & Category Artwork
import vanhocverseHeroBookImg from './images/vanhocverse_hero_book_1794508672657.jpg';
import vanhocVietnamCardImg from './images/vanhoc_vietnam_card_1794508674334.jpg';
import thoCaCardImg from './images/tho_ca_card_1794508675654.jpg';
import truyenNganCardImg from './images/truyen_ngan_card_1794508676611.jpg';
import vanhocThegioiCardImg from './images/vanhoc_thegioi_card_1794508675422.jpg';

export const LIBRARY_HERO_IMAGE = libraryHeroImg;
export const HERO_BOOK_IMAGE = vanhocverseHeroBookImg;

export const CATEGORY_IMAGES = {
  vietnam: vanhocVietnamCardImg,
  poetry: thoCaCardImg,
  shortStory: truyenNganCardImg,
  world: vanhocThegioiCardImg,
} as const;

export const WORK_IMAGES = {
  'vo-nhat': voNhatImg,
  'song': songImg,
  'nguoi-lai-do-song-da': songDaImg,
  'hon-truong-ba-da-hang-thit': truongBaImg,
  'chi-pheo': chiPheoImg,
  'tay-tien': tayTienImg,
  'binh-ngo-dai-cao': binhNgoImg,
  'trao-duyen': traoDuyenImg,
  'chu-nguoi-tu-tu': chuNguoiTuTuImg,
  'day-thon-vi-da': dayThonViDaImg,
  'chiec-thuyen-ngoai-xa': chiecThuyenNgoaiXaImg,
  // 10 New Works (Grades 10, 11, 12)
  'dam-san': binhNgoImg,
  'chinh-phu-ngam': traoDuyenImg,
  'mua-xuan-chin': thoCaCardImg,
  'trang-giang': songDaImg,
  'voi-vang': dayThonViDaImg,
  'hai-dua-tre': truyenNganCardImg,
  'ai-da-dat-ten-cho-dong-song': songImg,
  'viet-bac': tayTienImg,
  'dat-nuoc': vanhocVietnamCardImg,
  'vo-chong-a-phu': voNhatImg,
  // 15 New Works for Full GDPT 2018 Curriculum (Lớp 10, 11, 12)
  'than-tru-troi': libraryHeroImg,
  'chuyen-chuc-phan-su-den-tan-vien': binhNgoImg,
  'duc-thuy-son': vanhocVietnamCardImg,
  'duoi-bong-hoang-lan': thoCaCardImg,
  'nguoi-cam-quyen-khoi-phuc-uy-quyen': vanhocThegioiCardImg,
  'loi-tieng-dan-bau': traoDuyenImg,
  'van-te-nghia-si-can-giuoc': binhNgoImg,
  'chieu-suong': chiecThuyenNgoaiXaImg,
  'coi-la': dayThonViDaImg,
  'to-tam-song-hay-khong-song': truongBaImg,
  'tuyen-ngon-doc-lap': vanhocVietnamCardImg,
  'nhat-ky-dang-thuy-tram': tayTienImg,
  'muoi-cua-rung': songDaImg,
  'xuan-toc-do-cuu-quoc': chiPheoImg,
  'cam-hoai-thu-hung': chuNguoiTuTuImg,
} as const;


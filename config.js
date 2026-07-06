/**
 * 두인경매 QR 시스템 - 설정 파일
 *
 * ★ 배포 환경마다 이 파일만 수정하세요 ★
 */
window.DUIN_CONFIG = {
  WORKER_URL: 'https://polished-meadow-ca23.giyong8312005.workers.dev',

  COUPON: {
    show: true,
    code: 'DUIN-QR2026',
    title: '쿠폰 다운받기',
    desc: '',
    modalDesc: '',
    successMsg: '물건을 선택해 주세요.',
    successTitle: '쿠폰 적용 완료',
    btnText: '받기 →',
  },

  COUPON_ACCESS_DAYS: 30,

  PAID_SIGNUP: {
    show: true,
    url: 'https://www.dooinauction.com',
    linkText: '권리분석·매각명세서가 더 필요하시면 두인경매에서 보기 →',
  },
};

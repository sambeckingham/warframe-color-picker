import React, {FC} from "react"
import Color from "color";

export const ColorPickerHeader = (
  {
    headerColor,
    width
  }: {
    headerColor: Color,
    width: number
  }
) => {
  return (
      <svg width="180" height="63" viewBox="0 0 180 63" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transition: "stroke 1s linear", width: `${width}em`}}>
        <path style={{transition: "fill 1s linear"}}
          d="M8.55175 48.4073L8.07663 49.7703L8.55175 48.4073ZM3.89784 44.9342L2.71127 45.7561C2.71514 45.7617 2.71904 45.7672 2.72298 45.7728L3.89784 44.9342ZM1.88188 39.0414L3.32038 38.922L3.31963 38.9136L1.88188 39.0414ZM4.36721 29.7058L3.19092 28.8692L3.18743 28.8742L4.36721 29.7058ZM18.1915 24.2634L17.7664 25.6429L17.7748 25.6454L18.1915 24.2634ZM22.6663 27.3026L23.6311 28.3762C24.1987 27.8661 24.2712 27.0022 23.7965 26.4047L22.6663 27.3026ZM19.1541 30.459L18.0471 31.3853C18.2984 31.6857 18.661 31.871 19.0517 31.8988C19.4424 31.9266 19.8276 31.7944 20.1189 31.5326L19.1541 30.459ZM7.90527 32.1615L6.72063 31.3367L6.71511 31.3448L7.90527 32.1615ZM6.37117 38.2397L7.81073 38.1341C7.81033 38.1287 7.80991 38.1233 7.80945 38.118L6.37117 38.2397ZM8.75362 43.2854L7.87091 44.4274L8.75362 43.2854ZM19.7016 39.1929L20.1611 37.8245C19.4307 37.5793 18.6364 37.9509 18.3566 38.6688L19.7016 39.1929ZM23.9354 40.6147L25.2682 41.1687C25.4219 40.799 25.4151 40.3821 25.2495 40.0176C25.0839 39.6531 24.7744 39.3738 24.3949 39.2464L23.9354 40.6147ZM20.3191 45.6477L19.3646 44.5649L19.3594 44.5695L20.3191 45.6477ZM14.4684 47.1569C12.4524 47.6708 10.654 47.6115 9.02688 47.0443L8.07663 49.7703C10.31 50.5488 12.6936 50.5884 15.1814 49.9543L14.4684 47.1569ZM9.02688 47.0443C7.37464 46.4684 6.06931 45.4919 5.07268 44.0956L2.72298 45.7728C4.07119 47.6616 5.86847 49.0006 8.07663 49.7703L9.02688 47.0443ZM5.08439 44.1123C4.08827 42.6742 3.48945 40.9588 3.32035 38.922L0.443401 39.1608C0.64939 41.6421 1.39454 43.8552 2.71127 45.7561L5.08439 44.1123ZM3.31963 38.9136C3.04371 35.8093 3.78413 33.0383 5.547 30.5374L3.18743 28.8742C1.02511 31.9418 0.108634 35.3946 0.444117 39.1692L3.31963 38.9136ZM5.54349 30.5424C7.33041 28.0298 9.68397 26.4141 12.654 25.6571L11.9409 22.8597C8.30537 23.7864 5.3721 25.8023 3.19093 28.8692L5.54349 30.5424ZM12.654 25.6571C14.5894 25.1637 16.2791 25.1844 17.7664 25.6428L18.6167 22.884C16.5345 22.2423 14.2949 22.2597 11.9409 22.8597L12.654 25.6571ZM17.7748 25.6454C19.2985 26.1048 20.5415 26.9485 21.5361 28.2005L23.7965 26.4047C22.4371 24.6937 20.6969 23.5112 18.6082 22.8815L17.7748 25.6454ZM21.7015 26.229L18.1893 29.3854L20.1189 31.5326L23.6311 28.3762L21.7015 26.229ZM20.2611 29.5327C19.3282 28.4179 18.1913 27.6293 16.8527 27.2428C15.5239 26.8591 14.0981 26.9007 12.6215 27.2771L13.3346 30.0745C14.4316 29.7948 15.322 29.8056 16.0519 30.0163C16.7719 30.2243 17.4362 30.6553 18.0471 31.3853L20.2611 29.5327ZM12.6215 27.2771C10.149 27.9073 8.16071 29.2682 6.72065 31.3368L9.0899 32.9862C10.1242 31.5004 11.5178 30.5376 13.3346 30.0745L12.6215 27.2771ZM6.71511 31.3448C5.298 33.4099 4.71375 35.7721 4.93289 38.3614L7.80945 38.118C7.64258 36.1462 8.08107 34.4564 9.09542 32.9782L6.71511 31.3448ZM4.93163 38.3453C5.11925 40.9034 6.0429 43.0145 7.87091 44.4274L9.63634 42.1433C8.61994 41.3577 7.9553 40.105 7.81073 38.1341L4.93163 38.3453ZM7.87091 44.4274C9.71456 45.8524 11.9466 46.1537 14.364 45.5375L13.6509 42.7401C11.9076 43.1845 10.6371 42.9168 9.63634 42.1433L7.87091 44.4274ZM14.364 45.5375C17.5838 44.7168 19.8622 42.7559 21.0465 39.717L18.3566 38.6688C17.5249 40.8031 16.0072 42.1395 13.6509 42.7401L14.364 45.5375ZM19.242 40.5612L23.4759 41.983L24.3949 39.2464L20.1611 37.8245L19.242 40.5612ZM22.6025 40.0607C21.8812 41.796 20.8066 43.2938 19.3646 44.5649L21.2735 46.7305C23.0392 45.1741 24.3755 43.3165 25.2682 41.1687L22.6025 40.0607ZM19.3594 44.5695C17.9519 45.8221 16.3281 46.6829 14.4684 47.1569L15.1814 49.9543C17.4824 49.3678 19.5213 48.2899 21.2787 46.7259L19.3594 44.5695ZM29.1351 41.1394L28.2668 42.2925L28.272 42.2963L29.1351 41.1394ZM25.0079 33.1467L26.4479 33.0477C26.4474 33.0406 26.4469 33.0335 26.4463 33.0264L25.0079 33.1467ZM27.5254 23.8028L28.701 24.6403L28.7017 24.6394L27.5254 23.8028ZM44.2797 19.9091L43.4115 21.0622L43.4178 21.0669L44.2797 19.9091ZM48.4712 27.8854L47.0318 27.9934L47.0321 27.9966L48.4712 27.8854ZM45.9215 37.2374L47.0972 38.0748L45.9215 37.2374ZM42.2706 34.742L41.1023 33.8942L41.0969 33.9018L42.2706 34.742ZM43.9819 28.6871L45.4217 28.584L45.4206 28.57L43.9819 28.6871ZM41.4708 23.6742L40.6034 24.828L40.6121 24.8344L41.4708 23.6742ZM31.1038 26.2825L32.2884 27.1072L32.2893 27.106L31.1038 26.2825ZM29.4972 32.3449L30.9369 32.2418L30.9367 32.2394L29.4972 32.3449ZM31.9118 37.3824L31.0315 38.5263C31.038 38.5313 31.0445 38.5362 31.0511 38.5411L31.9118 37.3824ZM37.4335 41.3031C34.5599 42.0356 32.1304 41.5731 29.9982 39.9824L28.272 42.2963C31.1599 44.4508 34.5004 45.0299 38.1466 44.1005L37.4335 41.3031ZM30.0033 39.9862C27.8558 38.3693 26.6581 36.1083 26.4479 33.0477L23.5679 33.2456C23.8294 37.0538 25.3832 40.1213 28.2669 42.2925L30.0033 39.9862ZM26.4463 33.0264C26.1842 29.8908 26.9365 27.1174 28.701 24.6403L26.3497 22.9654C24.1781 26.014 23.2521 29.4697 23.5695 33.2669L26.4463 33.0264ZM28.7017 24.6394C30.479 22.1403 32.9009 20.4962 36.0374 19.6967L35.3243 16.8993C31.5549 17.8601 28.5399 19.8859 26.3491 22.9663L28.7017 24.6394ZM36.0374 19.6967C38.8566 18.9781 41.2671 19.4476 43.4115 21.0622L45.1479 18.756C42.2611 16.5824 38.9391 15.9779 35.3243 16.8993L36.0374 19.6967ZM43.4178 21.0669C45.5876 22.6822 46.8027 24.9405 47.0318 27.9934L49.9106 27.7774C49.625 23.9724 48.0458 20.9132 45.1416 18.7513L43.4178 21.0669ZM47.0321 27.9966C47.2751 31.1409 46.5121 33.9206 44.7459 36.3999L47.0972 38.0748C49.2672 35.0286 50.2039 31.5736 49.9104 27.7742L47.0321 27.9966ZM44.7459 36.3999C42.9865 38.8698 40.5738 40.5027 37.4335 41.3031L38.1466 44.1005C41.9122 43.1407 44.9205 41.1306 47.0972 38.0748L44.7459 36.3999ZM37.5543 39.6264C39.9907 39.0053 41.9691 37.6427 43.4442 35.5822L41.0969 33.9018C40.0119 35.4174 38.6084 36.3786 36.8413 36.829L37.5543 39.6264ZM43.4388 35.5898C44.9432 33.5167 45.6062 31.1606 45.4217 28.584L42.5422 28.7902C42.6789 30.6997 42.201 32.3802 41.1023 33.8942L43.4388 35.5898ZM45.4206 28.57C45.2125 26.0122 44.2259 23.9176 42.3295 22.514L40.6121 24.8344C41.6997 25.6395 42.3872 26.8868 42.5432 28.8042L45.4206 28.57ZM42.3381 22.5205C40.4372 21.0914 38.1822 20.7617 35.7475 21.3823L36.4606 24.1797C38.1866 23.7398 39.5094 24.0056 40.6034 24.828L42.3381 22.5205ZM35.7475 21.3823C33.3222 22.0005 31.3646 23.377 29.9184 25.459L32.2893 27.106C33.3494 25.5799 34.7252 24.6221 36.4606 24.1797L35.7475 21.3823ZM29.9192 25.4578C28.4832 27.5205 27.8686 29.8732 28.0576 32.4505L30.9367 32.2394C30.7936 30.2877 31.2501 28.5987 32.2884 27.1072L29.9192 25.4578ZM28.0574 32.448C28.2402 34.9998 29.1827 37.1035 31.0315 38.5263L32.7921 36.2385C31.7427 35.4309 31.0754 34.1762 30.9369 32.2418L28.0574 32.448ZM31.0511 38.5411C32.9245 39.9328 35.1516 40.2388 37.5543 39.6264L36.8413 36.829C35.1262 37.2661 33.8293 37.0087 32.7725 36.2237L31.0511 38.5411ZM56.7303 32.872L55.291 32.9806C55.3231 33.406 55.5417 33.7954 55.8882 34.0443C56.2347 34.2932 56.6735 34.3761 57.0868 34.2707L56.7303 32.872ZM65.3197 30.6826L66.7589 30.5715C66.7261 30.1466 66.5072 29.7579 66.1609 29.5096C65.8145 29.2613 65.3762 29.1787 64.9632 29.2839L65.3197 30.6826ZM65.6622 35.1177L66.0188 36.5164C66.6986 36.3431 67.1554 35.706 67.1014 35.0065L65.6622 35.1177ZM52.6334 38.4387L51.1942 38.5498C51.227 38.9747 51.4459 39.3634 51.7922 39.6117C52.1386 39.8601 52.5769 39.9427 52.9899 39.8374L52.6334 38.4387ZM52.2909 34.0036L50.8515 34.1122L50.8517 34.1148L52.2909 34.0036ZM50.8502 14.911L50.4937 13.5123C49.8148 13.6854 49.3582 14.321 49.4109 15.0196L50.8502 14.911ZM55.2897 13.7794L56.729 13.6708C56.6969 13.2454 56.4783 12.856 56.1318 12.6071C55.7854 12.3582 55.3466 12.2754 54.9332 12.3807L55.2897 13.7794ZM57.0868 34.2707L65.6763 32.0813L64.9632 29.2839L56.3738 31.4733L57.0868 34.2707ZM63.8806 30.7938L64.2231 35.2288L67.1014 35.0065L66.7589 30.5715L63.8806 30.7938ZM65.3057 33.719L52.2768 37.04L52.9899 39.8374L66.0188 36.5164L65.3057 33.719ZM54.0725 38.3276L53.73 33.8925L50.8517 34.1148L51.1942 38.5498L54.0725 38.3276ZM53.7302 33.895L52.2896 14.8024L49.4109 15.0196L50.8515 34.1122L53.7302 33.895ZM51.2068 16.3097L55.6462 15.1781L54.9332 12.3807L50.4937 13.5123L51.2068 16.3097ZM53.8504 13.888L55.291 32.9806L58.1697 32.7634L56.729 13.6708L53.8504 13.888ZM69.1353 30.9434L68.2671 32.0965L68.2722 32.1004L69.1353 30.9434ZM65.0081 22.9507L66.4481 22.8518C66.4477 22.8447 66.4471 22.8376 66.4465 22.8305L65.0081 22.9507ZM67.5256 13.6069L68.7013 14.4444L68.7019 14.4435L67.5256 13.6069ZM84.2799 9.71316L83.4117 10.8663L83.418 10.871L84.2799 9.71316ZM88.4715 17.6895L87.0321 17.7975L87.0323 17.8007L88.4715 17.6895ZM85.9218 27.0415L87.0974 27.8789L85.9218 27.0415ZM82.2708 24.5461L81.1025 23.6983L81.0971 23.7058L82.2708 24.5461ZM83.9821 18.4912L85.422 18.3881L85.4208 18.3741L83.9821 18.4912ZM81.471 13.4783L80.6036 14.6321L80.6123 14.6385L81.471 13.4783ZM71.1041 16.0865L72.2887 16.9113L72.2895 16.91L71.1041 16.0865ZM69.4974 22.149L70.9371 22.0459L70.937 22.0434L69.4974 22.149ZM71.912 27.1865L71.0317 28.3304C71.0382 28.3354 71.0447 28.3403 71.0513 28.3452L71.912 27.1865ZM77.4338 31.1072C74.5601 31.8397 72.1306 31.3772 69.9984 29.7865L68.2722 32.1004C71.1602 34.2549 74.5006 34.834 78.1468 33.9046L77.4338 31.1072ZM70.0035 29.7903C67.856 28.1734 66.6584 25.9124 66.4481 22.8518L63.5681 23.0496C63.8296 26.8579 65.3834 29.9253 68.2671 32.0965L70.0035 29.7903ZM66.4465 22.8305C66.1844 19.6949 66.9367 16.9215 68.7013 14.4444L66.35 12.7695C64.1784 15.818 63.2523 19.2738 63.5697 23.0709L66.4465 22.8305ZM68.7019 14.4435C70.4792 11.9444 72.9011 10.3003 76.0376 9.50079L75.3245 6.70339C71.5552 7.66419 68.5401 9.68993 66.3493 12.7704L68.7019 14.4435ZM76.0376 9.50079C78.8568 8.78218 81.2673 9.25171 83.4117 10.8663L85.1481 8.56005C82.2614 6.38651 78.9393 5.782 75.3245 6.70339L76.0376 9.50079ZM83.418 10.871C85.5879 12.4863 86.803 14.7446 87.0321 17.7975L89.9108 17.5814C89.6253 13.7764 88.046 10.7172 85.1418 8.55532L83.418 10.871ZM87.0323 17.8007C87.2753 20.9449 86.5123 23.7246 84.7461 26.204L87.0974 27.8789C89.2674 24.8326 90.2042 21.3777 89.9106 17.5782L87.0323 17.8007ZM84.7461 26.204C82.9867 28.6739 80.574 30.3068 77.4338 31.1072L78.1468 33.9046C81.9124 32.9448 84.9207 30.9347 87.0974 27.8789L84.7461 26.204ZM77.5545 29.4305C79.991 28.8094 81.9693 27.4468 83.4445 25.3863L81.0971 23.7058C80.0121 25.2214 78.6086 26.1826 76.8415 26.6331L77.5545 29.4305ZM83.439 25.3938C84.9434 23.3208 85.6064 20.9647 85.4219 18.3881L82.5424 18.5943C82.6792 20.5038 82.2013 22.1843 81.1026 23.6983L83.439 25.3938ZM85.4208 18.3741C85.2127 15.8163 84.2261 13.7217 82.3297 12.3181L80.6123 14.6385C81.7 15.4435 82.3875 16.6908 82.5435 18.6082L85.4208 18.3741ZM82.3384 12.3245C80.4374 10.8955 78.1824 10.5658 75.7478 11.1864L76.4608 13.9838C78.1869 13.5438 79.5096 13.8096 80.6037 14.6321L82.3384 12.3245ZM75.7478 11.1864C73.3225 11.8046 71.3648 13.1811 69.9186 15.2631L72.2895 16.91C73.3496 15.384 74.7255 14.4261 76.4608 13.9838L75.7478 11.1864ZM69.9194 15.2618C68.4834 17.3246 67.8688 19.6773 68.0579 22.2546L70.937 22.0434C70.7938 20.0917 71.2503 18.4028 72.2887 16.9113L69.9194 15.2618ZM68.0577 22.2521C68.2404 24.8039 69.1829 26.9076 71.0317 28.3304L72.7924 26.0426C71.7429 25.2349 71.0757 23.9803 70.9371 22.0459L68.0577 22.2521ZM71.0513 28.3452C72.9247 29.7368 75.1518 30.0429 77.5545 29.4305L76.8415 26.6331C75.1264 27.0702 73.8295 26.8128 72.7728 26.0278L71.0513 28.3452ZM108.019 8.62984L109.459 8.5347L109.459 8.52267L108.019 8.62984ZM107.154 13.0302L105.863 12.3845C105.86 12.3893 105.858 12.3941 105.856 12.3989L107.154 13.0302ZM104.23 16.345L103.433 15.1415C103.103 15.3598 102.878 15.7039 102.809 16.0933C102.74 16.4827 102.834 16.8833 103.068 17.2016L104.23 16.345ZM109.78 23.8721L110.137 25.2708C110.602 25.1522 110.978 24.8098 111.14 24.3575C111.301 23.9051 111.227 23.4021 110.942 23.0155L109.78 23.8721ZM105.276 25.0201L104.11 25.8698C104.457 26.3472 105.061 26.5647 105.633 26.4188L105.276 25.0201ZM100.163 17.9982L101.33 17.1486C100.983 16.6711 100.379 16.4536 99.8068 16.5995L100.163 17.9982ZM96.4638 18.9412L96.1072 17.5425C95.4288 17.7155 94.9723 18.3504 95.0243 19.0486L96.4638 18.9412ZM97.0731 27.1112L97.4296 28.5099C98.108 28.3369 98.5646 27.702 98.5125 27.0038L97.0731 27.1112ZM92.6336 28.2428L91.1943 28.3518C91.2265 28.7771 91.4452 29.1664 91.7916 29.4152C92.1381 29.664 92.5768 29.7468 92.9901 29.6415L92.6336 28.2428ZM90.8505 4.71511L90.4939 3.31641C89.8148 3.4895 89.3582 4.12538 89.4112 4.82418L90.8505 4.71511ZM105.218 3.5539L104.364 4.71749L104.373 4.72435L105.218 3.5539ZM103.53 9.43154L104.97 9.33098L104.97 9.33098L103.53 9.43154ZM102.417 7.21433L101.547 8.36649C101.553 8.3713 101.56 8.37606 101.566 8.38076L102.417 7.21433ZM95.6078 7.92204L95.2513 6.52334C94.5713 6.69667 94.1145 7.33398 94.1687 8.03363L95.6078 7.92204ZM96.1471 14.8764L94.708 14.988C94.741 15.4128 94.9599 15.8014 95.3062 16.0496C95.6525 16.2978 96.0908 16.3804 96.5037 16.2751L96.1471 14.8764ZM106.579 8.72498C106.666 10.0509 106.425 11.2609 105.863 12.3845L108.445 13.6759C109.244 12.077 109.58 10.3534 109.459 8.5347L106.579 8.72498ZM105.856 12.3989C105.312 13.5163 104.513 14.426 103.433 15.1415L105.027 17.5484C106.526 16.5558 107.676 15.2556 108.452 13.6615L105.856 12.3989ZM103.068 17.2016L108.618 24.7288L110.942 23.0155L105.392 15.4883L103.068 17.2016ZM109.424 22.4734L104.92 23.6214L105.633 26.4188L110.137 25.2708L109.424 22.4734ZM106.443 24.1705L101.33 17.1486L98.9965 18.8479L104.11 25.8698L106.443 24.1705ZM99.8068 16.5995L96.1072 17.5425L96.8203 20.3399L100.52 19.3969L99.8068 16.5995ZM95.0243 19.0486L95.6336 27.2185L98.5125 27.0038L97.9032 18.8339L95.0243 19.0486ZM96.7165 25.7125L92.2771 26.8441L92.9901 29.6415L97.4296 28.5099L96.7165 25.7125ZM94.0729 28.1337L92.2898 4.60602L89.4112 4.82418L91.1943 28.3518L94.0729 28.1337ZM91.207 6.1138L99.9894 3.87519L99.2764 1.07779L90.4939 3.31641L91.207 6.1138ZM99.9894 3.87519C101.611 3.46184 103.028 3.73696 104.364 4.71745L106.072 2.39034C104.036 0.895621 101.73 0.452464 99.2764 1.07779L99.9894 3.87519ZM104.373 4.72435C105.725 5.70015 106.45 6.99786 106.58 8.73701L109.459 8.52267C109.268 5.95818 108.125 3.87193 106.063 2.38345L104.373 4.72435ZM104.067 12.9167C104.759 11.832 105.06 10.6206 104.97 9.33098L102.09 9.53211C102.138 10.2173 101.985 10.8116 101.633 11.3636L104.067 12.9167ZM104.97 9.33098C104.877 8.00697 104.35 6.83737 103.267 6.0479L101.566 8.38076C101.83 8.5728 102.044 8.88134 102.09 9.53211L104.97 9.33098ZM103.286 6.06217C102.195 5.23902 100.903 5.0828 99.5943 5.41633L100.307 8.21373C100.929 8.05526 101.28 8.16524 101.547 8.36649L103.286 6.06217ZM99.5943 5.41633L95.2513 6.52334L95.9644 9.32074L100.307 8.21373L99.5943 5.41633ZM94.1687 8.03363L94.708 14.988L97.5862 14.7648L97.0469 7.81044L94.1687 8.03363ZM96.5037 16.2751L101.072 15.1107L100.359 12.3133L95.7906 13.4777L96.5037 16.2751ZM101.072 15.1107C102.345 14.7862 103.357 14.029 104.067 12.9167L101.633 11.3636C101.298 11.8879 100.887 12.1787 100.359 12.3133L101.072 15.1107ZM84.2942 36.6478L83.4447 37.8148L83.4529 37.8207L84.2942 36.6478ZM87.0558 41.8367L85.6189 41.9743L85.6199 41.9838L87.0558 41.8367ZM85.4813 47.8909L86.6485 48.7403L86.655 48.7312L85.4813 47.8909ZM75.993 52.4679L75.6365 51.0692C74.9565 51.2425 74.4997 51.8798 74.5539 52.5795L75.993 52.4679ZM76.5922 60.195L76.9488 61.5937C77.6288 61.4203 78.0856 60.783 78.0313 60.0834L76.5922 60.195ZM72.1528 61.3266L70.7135 61.4357C70.7457 61.861 70.9644 62.2502 71.3108 62.499C71.6573 62.7478 72.096 62.8306 72.5093 62.7253L72.1528 61.3266ZM70.3696 37.7989L70.0131 36.4002C69.334 36.5733 68.8774 37.2092 68.9304 37.908L70.3696 37.7989ZM82.5665 42.6384L81.1256 42.7255L81.1264 42.7363L82.5665 42.6384ZM75.127 41.0059L74.7705 39.6072C74.0908 39.7804 73.634 40.4172 73.6878 41.1166L75.127 41.0059ZM75.6751 48.1293L74.236 48.2401C74.2687 48.665 74.4875 49.0538 74.8338 49.3022C75.1802 49.5507 75.6186 49.6333 76.0317 49.528L75.6751 48.1293ZM78.8009 37.1394C80.7348 36.6465 82.2251 36.9268 83.4447 37.8147L85.1438 35.4809C83.1102 34.0004 80.7006 33.676 78.0878 34.342L78.8009 37.1394ZM83.4529 37.8207C84.6808 38.7014 85.4319 40.0209 85.6189 41.9743L88.4926 41.6991C88.2399 39.0595 87.1498 36.9197 85.1355 35.4749L83.4529 37.8207ZM85.6199 41.9838C85.8155 43.8925 85.3767 45.5574 84.3077 47.0507L86.655 48.7312C88.1461 46.6484 88.7569 44.2771 88.4917 41.6895L85.6199 41.9838ZM84.3142 47.0416C83.2635 48.4856 81.6715 49.5308 79.4004 50.1098L80.1134 52.9072C82.9037 52.1959 85.1281 50.8295 86.6484 48.7402L84.3142 47.0416ZM79.4004 50.1098L75.6365 51.0692L76.3496 53.8666L80.1134 52.9072L79.4004 50.1098ZM74.5539 52.5795L75.1531 60.3066L78.0313 60.0834L77.4321 52.3563L74.5539 52.5795ZM76.2357 58.7963L71.7962 59.9279L72.5093 62.7253L76.9488 61.5937L76.2357 58.7963ZM73.5921 61.2175L71.8089 37.6898L68.9304 37.908L70.7135 61.4357L73.5921 61.2175ZM70.7262 39.1976L78.8009 37.1394L78.0878 34.342L70.0131 36.4002L70.7262 39.1976ZM84.0073 42.5513C83.9263 41.2127 83.4506 39.9815 82.3556 39.1771L80.6466 41.5037C80.8442 41.6489 81.0788 41.9497 81.1257 42.7255L84.0073 42.5513ZM82.3556 39.1771C81.2236 38.3456 79.8257 38.3186 78.47 38.6642L79.1831 41.4616C80.1008 41.2276 80.4859 41.3857 80.6466 41.5037L82.3556 39.1771ZM78.47 38.6642L74.7705 39.6072L75.4835 42.4046L79.1831 41.4616L78.47 38.6642ZM73.6878 41.1166L74.236 48.2401L77.1143 48.0186L76.5662 40.8951L73.6878 41.1166ZM76.0317 49.528L79.506 48.6424L78.793 45.845L75.3186 46.7306L76.0317 49.528ZM79.506 48.6424C80.9519 48.2739 82.1583 47.5395 82.9798 46.3706L80.6178 44.7107C80.2661 45.2112 79.7062 45.6122 78.793 45.845L79.506 48.6424ZM82.9798 46.3706C83.7723 45.2428 84.1019 43.9418 84.0066 42.5404L81.1264 42.7363C81.1807 43.5351 80.9986 44.1689 80.6178 44.7107L82.9798 46.3706ZM89.5058 32.9212L89.1493 31.5225C88.4702 31.6956 88.0136 32.3315 88.0665 33.0303L89.5058 32.9212ZM93.9453 31.7896L95.3846 31.6805C95.3523 31.2552 95.1337 30.8659 94.7872 30.6171C94.4408 30.3684 94.0021 30.2855 93.5888 30.3909L93.9453 31.7896ZM95.7284 55.3172L96.0849 56.7159C96.764 56.5428 97.2206 55.907 97.1677 55.2081L95.7284 55.3172ZM91.2889 56.4488L89.8496 56.5579C89.8819 56.9832 90.1005 57.3725 90.447 57.6213C90.7934 57.8701 91.2322 57.9529 91.6455 57.8475L91.2889 56.4488ZM89.8623 34.3199L94.3018 33.1883L93.5888 30.3909L89.1493 31.5225L89.8623 34.3199ZM92.506 31.8987L94.2891 55.4263L97.1677 55.2081L95.3846 31.6805L92.506 31.8987ZM95.3719 53.9185L90.9324 55.0501L91.6455 57.8475L96.0849 56.7159L95.3719 53.9185ZM92.7282 56.3398L90.9451 32.8121L88.0665 33.0303L89.8496 56.5579L92.7282 56.3398ZM104.773 51.7442L104.298 53.1072L104.773 51.7442ZM100.119 48.2711L98.9324 49.093C98.9363 49.0986 98.9402 49.1041 98.9442 49.1096L100.119 48.2711ZM98.1031 42.3783L99.5416 42.2588L99.5408 42.2505L98.1031 42.3783ZM100.588 33.0426L99.4121 32.2061L99.4086 32.211L100.588 33.0426ZM114.413 27.6003L113.988 28.9797L113.996 28.9823L114.413 27.6003ZM118.887 30.6394L119.852 31.713C120.42 31.2029 120.492 30.3391 120.018 29.7415L118.887 30.6394ZM115.375 33.7959L114.268 34.7222C114.52 35.0226 114.882 35.2079 115.273 35.2357C115.664 35.2634 116.049 35.1313 116.34 34.8695L115.375 33.7959ZM104.126 35.4983L102.942 34.6736L102.936 34.6816L104.126 35.4983ZM102.592 41.5765L104.032 41.471C104.032 41.4656 104.031 41.4602 104.031 41.4548L102.592 41.5765ZM104.975 46.6222L104.092 47.7643L104.975 46.6222ZM115.923 42.5297L116.382 41.1614C115.652 40.9161 114.858 41.2877 114.578 42.0056L115.923 42.5297ZM120.157 43.9515L121.489 44.5055C121.643 44.1359 121.636 43.719 121.471 43.3545C121.305 42.99 120.996 42.7107 120.616 42.5832L120.157 43.9515ZM116.54 48.9846L115.586 47.9017L115.581 47.9063L116.54 48.9846ZM110.69 50.4937C108.674 51.0076 106.875 50.9484 105.248 50.3812L104.298 53.1072C106.531 53.8857 108.915 53.9253 111.403 53.2911L110.69 50.4937ZM105.248 50.3812C103.596 49.8052 102.29 48.8288 101.294 47.4325L98.9442 49.1096C100.292 50.9985 102.09 52.3374 104.298 53.1072L105.248 50.3812ZM101.306 47.4491C100.309 46.0111 99.7106 44.2957 99.5415 42.2588L96.6646 42.4977C96.8706 44.979 97.6157 47.1921 98.9324 49.093L101.306 47.4491ZM99.5408 42.2505C99.2649 39.1462 100.005 36.3752 101.768 33.8743L99.4086 32.211C97.2463 35.2787 96.3298 38.7314 96.6653 42.506L99.5408 42.2505ZM101.765 33.8792C103.552 31.3666 105.905 29.751 108.875 28.9939L108.162 26.1965C104.527 27.1232 101.593 29.1392 99.4121 32.2061L101.765 33.8792ZM108.875 28.9939C110.811 28.5006 112.5 28.5213 113.988 28.9797L114.838 26.2209C112.756 25.5792 110.516 25.5965 108.162 26.1965L108.875 28.9939ZM113.996 28.9823C115.52 29.4417 116.763 30.2854 117.757 31.5373L120.018 29.7415C118.658 28.0305 116.918 26.8481 114.829 26.2183L113.996 28.9823ZM117.923 29.5659L114.41 32.7223L116.34 34.8695L119.852 31.713L117.923 29.5659ZM116.482 32.8696C115.549 31.7548 114.412 30.9662 113.074 30.5797C111.745 30.196 110.319 30.2375 108.843 30.6139L109.556 33.4113C110.653 33.1317 111.543 33.1424 112.273 33.3532C112.993 33.5611 113.657 33.9921 114.268 34.7222L116.482 32.8696ZM108.843 30.6139C106.37 31.2442 104.382 32.6051 102.942 34.6736L105.311 36.323C106.345 34.8373 107.739 33.8744 109.556 33.4113L108.843 30.6139ZM102.936 34.6816C101.519 36.7467 100.935 39.109 101.154 41.6983L104.031 41.4548C103.864 39.4831 104.302 37.7932 105.317 36.315L102.936 34.6816ZM101.153 41.6821C101.34 44.2403 102.264 46.3514 104.092 47.7643L105.858 45.4802C104.841 44.6946 104.176 43.4419 104.032 41.471L101.153 41.6821ZM104.092 47.7643C105.936 49.1893 108.168 49.4906 110.585 48.8744L109.872 46.077C108.129 46.5213 106.858 46.2537 105.858 45.4802L104.092 47.7643ZM110.585 48.8744C113.805 48.0536 116.083 46.0927 117.268 43.0538L114.578 42.0056C113.746 44.14 112.228 45.4764 109.872 46.077L110.585 48.8744ZM115.463 43.8981L119.697 45.3199L120.616 42.5832L116.382 41.1614L115.463 43.8981ZM118.824 43.3975C118.102 45.1328 117.028 46.6306 115.586 47.9018L117.495 50.0674C119.26 48.5109 120.597 46.6534 121.489 44.5055L118.824 43.3975ZM115.581 47.9063C114.173 49.159 112.549 50.0197 110.69 50.4937L111.403 53.2911C113.704 52.7046 115.743 51.6268 117.5 50.0628L115.581 47.9063ZM139.153 20.2662L140.402 20.9903C140.693 20.4876 140.655 19.8591 140.305 19.3956C139.954 18.9321 139.36 18.724 138.797 18.8675L139.153 20.2662ZM131.133 34.0961L129.884 33.372C129.553 33.9425 129.651 34.6646 130.122 35.1265L131.133 34.0961ZM141.001 43.7775L141.357 45.1762C141.862 45.0474 142.259 44.6563 142.394 44.1529C142.53 43.6495 142.384 43.1122 142.012 42.7471L141.001 43.7775ZM136.336 44.9665L135.325 45.9966C135.685 46.3501 136.204 46.4898 136.693 46.3652L136.336 44.9665ZM126.97 35.774L127.981 34.7438C127.551 34.3224 126.906 34.2115 126.36 34.4655C125.815 34.7194 125.484 35.2849 125.53 35.8847L126.97 35.774ZM127.843 47.1313L128.2 48.53C128.879 48.3567 129.336 47.7199 129.282 47.0206L127.843 47.1313ZM123.404 48.2629L121.964 48.372C121.997 48.7973 122.215 49.1865 122.562 49.4353C122.908 49.6841 123.347 49.7669 123.76 49.6616L123.404 48.2629ZM121.621 24.7352L121.264 23.3365C120.585 23.5096 120.128 24.1455 120.181 24.8443L121.621 24.7352ZM126.06 23.6036L127.499 23.4959C127.468 23.0703 127.249 22.6807 126.903 22.4316C126.556 22.1825 126.117 22.0995 125.704 22.2049L126.06 23.6036ZM126.815 33.6892L125.376 33.797C125.423 34.4275 125.875 34.9539 126.491 35.0958C127.107 35.2377 127.744 34.9621 128.062 34.4157L126.815 33.6892ZM133.845 21.6192L133.489 20.2205C133.114 20.3161 132.793 20.5583 132.598 20.8927L133.845 21.6192ZM137.905 19.5421L129.884 33.372L132.381 34.8203L140.402 20.9903L137.905 19.5421ZM130.122 35.1265L139.99 44.8078L142.012 42.7471L132.144 33.0658L130.122 35.1265ZM140.644 42.3788L135.98 43.5678L136.693 46.3652L141.357 45.1762L140.644 42.3788ZM137.347 43.9363L127.981 34.7438L125.959 36.8042L135.325 45.9966L137.347 43.9363ZM125.53 35.8847L126.404 47.242L129.282 47.0206L128.409 35.6633L125.53 35.8847ZM127.487 45.7326L123.047 46.8642L123.76 49.6616L128.2 48.53L127.487 45.7326ZM124.843 48.1538L123.06 24.6261L120.181 24.8443L121.964 48.372L124.843 48.1538ZM121.977 26.1339L126.417 25.0023L125.704 22.2049L121.264 23.3365L121.977 26.1339ZM124.621 23.7114L125.376 33.797L128.254 33.5815L127.499 23.4959L124.621 23.7114ZM128.062 34.4157L135.093 22.3457L132.598 20.8927L125.568 32.9628L128.062 34.4157ZM134.202 23.0179L139.51 21.6649L138.797 18.8675L133.489 20.2205L134.202 23.0179ZM155.653 20.5827L156.01 21.9814C156.69 21.8081 157.147 21.1711 157.093 20.4716L155.653 20.5827ZM146.324 22.9607L145.968 21.562C145.291 21.7346 144.835 22.3671 144.884 23.0638L146.324 22.9607ZM146.686 28.0076L145.246 28.1107C145.276 28.5372 145.494 28.9282 145.841 29.1783C146.188 29.4284 146.628 29.5119 147.042 29.4063L146.686 28.0076ZM155.243 25.8264L156.683 25.7317C156.655 25.3036 156.438 24.9102 156.091 24.6582C155.743 24.4062 155.302 24.3217 154.886 24.4277L155.243 25.8264ZM155.529 30.1732L155.885 31.5719C156.559 31.4001 157.014 30.7723 156.969 30.0785L155.529 30.1732ZM147.036 32.338L146.679 30.9393C146.001 31.112 145.545 31.7458 145.596 32.4434L147.036 32.338ZM147.422 37.6183L145.983 37.7237C146.014 38.1497 146.232 38.54 146.579 38.7896C146.925 39.0392 147.365 39.1225 147.779 39.017L147.422 37.6183ZM156.912 35.1993L158.352 35.0881C158.319 34.6632 158.1 34.2746 157.754 34.0262C157.407 33.7779 156.969 33.6953 156.556 33.8006L156.912 35.1993ZM157.255 39.6343L157.611 41.033C158.291 40.8597 158.748 40.2227 158.694 39.5232L157.255 39.6343ZM143.325 43.1849L141.886 43.294C141.918 43.7193 142.137 44.1086 142.483 44.3574C142.83 44.6062 143.269 44.689 143.682 44.5836L143.325 43.1849ZM141.542 19.6573L141.186 18.2586C140.507 18.4317 140.05 19.0676 140.103 19.7664L141.542 19.6573ZM155.311 16.1477L156.75 16.0365C156.717 15.6116 156.498 15.2229 156.152 14.9746C155.806 14.7263 155.367 14.6437 154.954 14.749L155.311 16.1477ZM155.297 19.184L145.968 21.562L146.681 24.3594L156.01 21.9814L155.297 19.184ZM144.884 23.0638L145.246 28.1107L148.125 27.9045L147.764 22.8576L144.884 23.0638ZM147.042 29.4063L155.599 27.2251L154.886 24.4277L146.329 26.6089L147.042 29.4063ZM153.802 25.9211L154.088 30.2678L156.969 30.0785L156.683 25.7317L153.802 25.9211ZM155.172 28.7745L146.679 30.9393L147.392 33.7367L155.885 31.5719L155.172 28.7745ZM145.596 32.4434L145.983 37.7237L148.862 37.5129L148.475 32.2326L145.596 32.4434ZM147.779 39.017L157.269 36.598L156.556 33.8006L147.066 36.2196L147.779 39.017ZM155.473 35.3104L155.816 39.7455L158.694 39.5232L158.352 35.0881L155.473 35.3104ZM156.898 38.2356L142.969 41.7862L143.682 44.5836L157.611 41.033L156.898 38.2356ZM144.765 43.0759L142.981 19.5482L140.103 19.7664L141.886 43.294L144.765 43.0759ZM141.899 21.056L155.667 17.5464L154.954 14.749L141.186 18.2586L141.899 21.056ZM153.872 16.2588L154.214 20.6938L157.093 20.4716L156.75 16.0365L153.872 16.2588ZM175.931 19.1827L177.371 19.0876L177.37 19.0756L175.931 19.1827ZM175.065 23.5831L173.774 22.9374C173.772 22.9422 173.769 22.947 173.767 22.9518L175.065 23.5831ZM172.141 26.8979L171.345 25.6944C171.015 25.9127 170.789 26.2568 170.72 26.6462C170.651 27.0356 170.745 27.4362 170.98 27.7545L172.141 26.8979ZM177.692 34.425L178.048 35.8237C178.514 35.7051 178.89 35.3627 179.051 34.9104C179.213 34.458 179.139 33.955 178.853 33.5684L177.692 34.425ZM173.188 35.573L172.021 36.4227C172.369 36.9001 172.972 37.1176 173.544 36.9718L173.188 35.573ZM168.075 28.5511L169.242 27.7015C168.894 27.224 168.291 27.0065 167.718 27.1524L168.075 28.5511ZM164.375 29.4941L164.019 28.0954C163.34 28.2684 162.884 28.9033 162.936 29.6015L164.375 29.4941ZM164.985 37.6641L165.341 39.0628C166.02 38.8898 166.476 38.2549 166.424 37.5567L164.985 37.6641ZM160.545 38.7957L159.106 38.9047C159.138 39.33 159.357 39.7193 159.703 39.9681C160.05 40.2169 160.488 40.2997 160.902 40.1944L160.545 38.7957ZM158.762 15.268L158.405 13.8693C157.726 14.0424 157.27 14.6783 157.323 15.3771L158.762 15.268ZM173.129 14.1068L172.275 15.2704L172.285 15.2773L173.129 14.1068ZM171.441 19.9844L172.881 19.8839L171.441 19.9844ZM170.328 17.7672L169.459 18.9194C169.465 18.9242 169.471 18.929 169.478 18.9337L170.328 17.7672ZM163.519 18.4749L163.163 17.0762C162.483 17.2496 162.026 17.8869 162.08 18.5865L163.519 18.4749ZM164.059 25.4293L162.62 25.5409C162.652 25.9657 162.871 26.3543 163.218 26.6025C163.564 26.8507 164.002 26.9333 164.415 26.828L164.059 25.4293ZM174.49 19.2779C174.578 20.6038 174.336 21.8138 173.774 22.9374L176.356 24.2288C177.156 22.6299 177.491 20.9063 177.371 19.0876L174.49 19.2779ZM173.767 22.9518C173.224 24.0692 172.425 24.9789 171.345 25.6944L172.938 28.1013C174.437 27.1087 175.588 25.8085 176.363 24.2144L173.767 22.9518ZM170.98 27.7545L176.53 35.2817L178.853 33.5684L173.303 26.0412L170.98 27.7545ZM177.335 33.0263L172.831 34.1743L173.544 36.9718L178.048 35.8237L177.335 33.0263ZM174.355 34.7234L169.242 27.7015L166.908 29.4008L172.021 36.4227L174.355 34.7234ZM167.718 27.1524L164.019 28.0954L164.732 30.8928L168.431 29.9498L167.718 27.1524ZM162.936 29.6015L163.545 37.7714L166.424 37.5567L165.815 29.3868L162.936 29.6015ZM164.628 36.2654L160.189 37.397L160.902 40.1944L165.341 39.0628L164.628 36.2654ZM161.984 38.6866L160.201 15.1589L157.323 15.3771L159.106 38.9047L161.984 38.6866ZM159.118 16.6667L167.901 14.4281L167.188 11.6307L158.405 13.8693L159.118 16.6667ZM167.901 14.4281C169.523 14.0147 170.94 14.2899 172.275 15.2704L173.984 12.9432C171.947 11.4485 169.641 11.0054 167.188 11.6307L167.901 14.4281ZM172.285 15.2773C173.637 16.2531 174.362 17.5508 174.491 19.2899L177.37 19.0756C177.179 16.5111 176.037 14.4248 173.974 12.9363L172.285 15.2773ZM171.978 23.4696C172.67 22.3849 172.971 21.1735 172.881 19.8839L170.001 20.085C170.049 20.7702 169.897 21.3645 169.545 21.9165L171.978 23.4696ZM172.881 19.8839C172.789 18.5599 172.261 17.3903 171.178 16.6008L169.478 18.9337C169.741 19.1257 169.956 19.4342 170.001 20.085L172.881 19.8839ZM171.198 16.6151C170.107 15.7919 168.814 15.6357 167.506 15.9692L168.219 18.7666C168.84 18.6082 169.192 18.7181 169.459 18.9194L171.198 16.6151ZM167.506 15.9692L163.163 17.0762L163.876 19.8736L168.219 18.7666L167.506 15.9692ZM162.08 18.5865L162.62 25.5409L165.498 25.3178L164.958 18.3633L162.08 18.5865ZM164.415 26.828L168.983 25.6636L168.27 22.8662L163.702 24.0306L164.415 26.828ZM168.983 25.6636C170.256 25.3391 171.268 24.5819 171.978 23.4696L169.545 21.9165C169.21 22.4408 168.799 22.7316 168.27 22.8662L168.983 25.6636Z"
          fill={headerColor.lightness(78).saturationl(59).hex()}/>
      </svg>
  )
}



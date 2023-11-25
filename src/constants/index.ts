// constants/forecastAreaCodes.js

/**
 * 日本の各都道府県及び地域の気象データアクセス用コード。
 * このオブジェクトを使用して、日本気象協会のAPIエンドポイントにアクセスする際のコードを参照できます。
 */
export const FORECAST_AREA_CODES = {
  HOKKAIDO: {
    /** 宗谷地方 */
    SOYA: "011000",
    /** 上川・留萌地方 */
    KAMIKAWA_RUMOI: "012000",
    /** 石狩・空知・後志地方 */
    ISHIKARI_SORACHI_SHIRIBESHI: "016000",
    /** 網走・北見・紋別地方 */
    ABASHIRI_KITAMI_MOMBETSU: "013000",
    /** 釧路・根室地方 */
    KUSHIRO_NEMURO: "014100",
    /** 十勝地方 ※取得不可、釧路・根室地方のデータに含まれる模様 */
    TOKACHI: "014030",
    /** 胆振・日高地方 */
    IBURI_HIDAKA: "015000",
    /** 渡島・檜山地方 */
    OSHIMA_HIYAMA: "017000",
  },
  TOHOKU: {
    /** 青森県 */
    AOMORI: "020000",
    /** 秋田県 */
    AKITA: "050000",
    /** 岩手県 */
    IWATE: "030000",
    /** 宮城県 */
    MIYAGI: "040000",
    /** 山形県 */
    YAMAGATA: "060000",
    /** 福島県 */
    FUKUSHIMA: "070000",
  },
  KANTO_KOSHIN: {
    /** 茨城県 */
    IBARAKI: "080000",
    /** 栃木県 */
    TOCHIGI: "090000",
    /** 群馬県 */
    GUNMA: "100000",
    /** 埼玉県 */
    SAITAMA: "110000",
    /** 東京都 */
    TOKYO: "130000",
    /** 千葉県 */
    CHIBA: "120000",
    /** 神奈川県 */
    KANAGAWA: "140000",
    /** 長野県 */
    NAGANO: "200000",
    /** 山梨県 */
    YAMANASHI: "190000",
  },
  TOKAI: {
    /** 静岡県 */
    SHIZUOKA: "220000",
    /** 愛知県 */
    AICHI: "230000",
    /** 岐阜県 */
    GIFU: "210000",
    /** 三重県 */
    MIE: "240000",
  },
  HOKURIKU: {
    /** 新潟県 */
    NIIGATA: "150000",
    /** 富山県 */
    TOYAMA: "160000",
    /** 石川県 */
    ISHIKAWA: "170000",
    /** 福井県 */
    FUKUI: "180000",
  },
  KINKI: {
    /** 滋賀県 */
    SHIGA: "250000",
    /** 京都府 */
    KYOTO: "260000",
    /** 大阪府 */
    OSAKA: "270000",
    /** 兵庫県 */
    HYOGO: "280000",
    /** 奈良県 */
    NARA: "290000",
    /** 和歌山県 */
    WAKAYAMA: "300000",
  },
  CHUGOKU: {
    /** 岡山県 */
    OKAYAMA: "330000",
    /** 広島県 */
    HIROSHIMA: "340000",
    /** 島根県 */
    SHIMANE: "320000",
    /** 鳥取県 */
    TOTTORI: "310000",
  },
  SHIKOKU: {
    /** 徳島県 */
    TOKUSHIMA: "360000",
    /** 香川県 */
    KAGAWA: "370000",
    /** 愛媛県 */
    EHIME: "380000",
    /** 高知県 */
    KOCHI: "390000",
  },
  KYUSHU_YAMAGUCHI: {
    /** 山口県 */
    YAMAGUCHI: "350000",
    /** 福岡県 */
    FUKUOKA: "400000",
    /** 大分県 */
    OITA: "440000",
    /** 長崎県 */
    NAGASAKI: "420000",
    /** 佐賀県 */
    SAGA: "410000",
    /** 熊本県 */
    KUMAMOTO: "430000",
    /** 宮崎県 */
    MIYAZAKI: "450000",
    /** 鹿児島県 */
    KAGOSHIMA: "460100",
    /** 奄美地方 ※取得不可、鹿児島県のデータに含まれる模様 */
    AMAMI: "460040",
  },
  OKINAWA: {
    /** 沖縄本島地方 */
    OKINAWA_MAIN_ISLAND: "471000",
    /** 大東島地方 */
    DAITO_ISLANDS: "472000",
    /** 宮古島地方 */
    MIYAKO_ISLANDS: "473000",
    /** 八重山地方 */
    YAEYAMA_ISLANDS: "474000",
  },
};

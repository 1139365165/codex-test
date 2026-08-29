export type Service = {
  title: string;
  meta: string;
  description: string;
  featured?: boolean;
  icon: "bath" | "cat" | "trim" | "care";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StoreDetail = {
  icon: string;
  label: string;
  value: string;
};

export const services: readonly Service[] = [
  {
    title: "狗狗清爽洗护",
    meta: "¥ 168 起 · 约 90 分钟",
    description: "清洁、护毛、剪甲、耳道护理，适合日常维持。",
    featured: true,
    icon: "bath",
  },
  {
    title: "猫咪舒缓洗护",
    meta: "¥ 198 起 · 约 100 分钟",
    description: "低噪环境、缓慢安抚，给敏感小猫更自在的体验。",
    icon: "cat",
  },
  {
    title: "造型修剪",
    meta: "¥ 238 起 · 约 120 分钟",
    description: "根据品种和生活习惯，剪出轻松好打理的轮廓。",
    icon: "trim",
  },
  {
    title: "深层呵护加购",
    meta: "¥ 58 起 · 按需添加",
    description: "保湿泥膜、精油护爪、去浮毛等，让细节也被照顾。",
    icon: "care",
  },
] as const;

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01 / 到店",
    title: "先认识，再开始",
    description: "记录习惯、禁忌与当日状态，确认今天最适合的护理方式。",
  },
  {
    number: "02 / 清洁",
    title: "温和洗净每一层",
    description: "按毛发类型调节水温、风量与产品浓度，减少不适和拉扯。",
  },
  {
    number: "03 / 修护",
    title: "把细节照顾好",
    description: "剪甲、耳道、脚底与毛发修整，一个步骤都不草率。",
  },
  {
    number: "04 / 回家",
    title: "带走一份小报告",
    description: "告诉你今天的护理记录与居家建议，方便下次更懂它。",
  },
] as const;

export type Testimonial = {
  quote: string;
  author: string;
  pet: string;
  service: string;
  rating: 5;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote: "以前洗完澡回家要躲半天，现在在门口就知道要来找姐姐，真的放心很多。",
    author: "豆包妈妈 · 养宠 3 年",
    pet: "比熊犬",
    service: "规律洗护",
    rating: 5,
  },
  {
    quote: "我家猫特别怕吹风机，这里会先安抚再慢慢来。第一次全程没有炸毛，回家还安静舔了半小时毛。",
    author: "布丁爸爸 · 养宠 5 年",
    pet: "英短猫",
    service: "猫咪舒缓洗护",
    rating: 5,
  },
  {
    quote: "造型剪得很自然，不是那种夸张的“美容脸”。老师会先确认长度，过程中也会随时告诉我们状态。",
    author: "Momo 妈妈 · 养宠 4 年",
    pet: "贵宾犬",
    service: "造型修剪",
    rating: 5,
  },
  {
    quote: "老年犬腰椎不好，他们全程垫软垫、动作很轻。结束时还写了护理小报告，回家怎么梳毛都写清楚了。",
    author: "旺财爷爷 · 养宠 8 年",
    pet: "金毛寻回犬",
    service: "深层呵护加购",
    rating: 5,
  },
  {
    quote: "预约时提醒得很细，带什么、几点到、结束后有没有空位等候都说清楚，体验比想象中更省心。",
    author: "糯米阿姨 · 养宠 2 年",
    pet: "柯基犬",
    service: "狗狗清爽洗护",
    rating: 5,
  },
  {
    quote: "小猫第一次外出洗澡，我以为会很崩溃。没想到接它时，它居然趴在护理师腿上打盹，真的太治愈了。",
    author: "橘子姐姐 · 养宠 1 年",
    pet: "橘猫",
    service: "猫咪舒缓洗护",
    rating: 5,
  },
] as const;
export const faqItems: readonly FaqItem[] = [
  {
    question: "需要提前多久预约？",
    answer: "建议提前 2–3 天预约，周末和节假日会更早满位。临时有空档时，我们也会在社交平台更新。",
  },
  {
    question: "猫咪和狗狗会分开护理吗？",
    answer: "会的。猫咪有独立的低噪护理时段和空间，尽量减少陌生声音与气味带来的紧张。",
  },
  {
    question: "洗护前需要准备什么？",
    answer: "带上牵引或航空箱即可。如果有过敏史、皮肤问题或特别抗拒的部位，请在预约时告诉我们。",
  },
  {
    question: "可以在现场等候吗？",
    answer: "可以。店内有休息区，也可以通过透明护理窗看到过程。完整服务结束后我们会第一时间通知你。",
  },
] as const;

export const storeDetails: readonly StoreDetail[] = [
  { icon: "⌂", label: "门店地址", value: "上海市静安区愚园路 88 号" },
  { icon: "◷", label: "营业时间", value: "周一至周日 10:00 – 20:00" },
  { icon: "⌁", label: "地铁出行", value: "地铁 2 / 11 号线江苏路站 3 号口，步行约 3 分钟" },
  { icon: "☎", label: "到店咨询", value: "021 – 6288 1314" },
] as const;

export const mapLinks = {
  amap: "https://uri.amap.com/navigation?to=121.4333%2C31.2243%2CMOMO%E6%AF%9B%E7%90%83%E7%A0%94%E7%A9%B6%E6%89%80&mode=car",
  baidu: "https://api.map.baidu.com/marker?location=31.2243%2C121.4333&title=MOMO%E6%AF%9B%E7%90%83%E7%A0%94%E7%A9%B6%E6%89%80&content=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%9D%99%E5%AE%89%E5%8C%BA%E6%84%9A%E5%9B%AD%E8%B7%AF88%E5%8F%B7&output=html",
} as const;

const siteContent = {
  brandName: "The Plant Factory",
  navItems: [
    {
      id: "about",
      label: "Technology"
    },
    {
      id: "subscription",
      label: "Monthly Plans"
    },
    {
      id: "shop",
      label: "Shop"
    }
  ],
  hero: {
    badgeText: "Premium Kale & Superfoods",
    title: "ฟาร์มผักเคลระบบปิดอัจฉริยะ ส่งตรงถึงบ้านคุณ",
    subtitle:
      "เลือกดูแลสุขภาพได้ยืดหยุ่นขึ้นด้วยระบบสมาชิกแบบ Point — สมัครรายเดือน รับโบนัสมูลค่าตามแพ็กเกจ แล้วใช้ Point เลือกสินค้าที่พร้อมจำหน่ายได้ตามต้องการ",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1600&q=80",
    primaryButtonText: "ดูแพ็กเกจรายเดือน (Subscription)",
    secondaryButtonText: "ทำไมต้องระบบปิด?"
  },
  heroTitle: "ฟาร์มผักเคลระบบปิดอัจฉริยะ ส่งตรงถึงบ้านคุณ",
  heroSubtitle:
    "เลือกดูแลสุขภาพได้ยืดหยุ่นขึ้นด้วยระบบสมาชิกแบบ Point — สมัครรายเดือน รับโบนัสมูลค่าตามแพ็กเกจ แล้วใช้ Point เลือกสินค้าที่พร้อมจำหน่ายได้ตามต้องการ",
  features: {
    title: "ทำไมต้องเลือก The Plant Factory?",
    subtitle: "เราผสานนวัตกรรมเข้ากับการเกษตร เพื่อสร้างมาตรฐานใหม่ของอาหารที่ปลอดภัยและยั่งยืน",
    items: [
      {
        icon: "sun",
        title: "Smart LED Farming",
        desc: "ควบคุมความยาวคลื่นแสง LED ให้เหมาะสมกับพืชแต่ละชนิด ทำให้พืชเจริญเติบโตเต็มที่และมีสารอาหารครบถ้วน"
      },
      {
        icon: "shield",
        title: "100% Safe & Clean",
        desc: "ปลูกในระบบปิดระดับห้องแลป (Cleanroom) ป้องกันแมลงและมลภาวะ ไม่ใช้ยาฆ่าแมลง ปลอดภัยไร้สารตกค้าง 100%"
      },
      {
        icon: "leaf",
        title: "Always Fresh",
        desc: "เก็บเกี่ยวสดใหม่ทุกวันตามออเดอร์ ควบคุมอุณหภูมิตลอดการจัดส่ง เพื่อให้ผักคงความกรอบอร่อยจนถึงมือคุณ"
      }
    ]
  },
  subscriptionsSection: {
    sectionKey: "subscriptions",
    sectionId: "subscription",
    eyebrow: "MEMBERSHIP POINTS",
    title: "แพ็กเกจสมาชิกรายเดือนแบบ Point",
    subtitle:
      "ไม่มีจำนวนกล่องตายตัว — สมาชิกได้รับ Point พร้อมโบนัส 10–15% ตามแพ็กเกจ แล้วเลือกสินค้าที่ Active/พร้อมจำหน่ายได้ตามต้องการ",
    priceSuffix: "LAK / เดือน"
  },
  membershipPolicy: {
    sourceId: "MEMBERSHIP-POINTS-20260925",
    effectiveDate: "2026-09-25",
    currency: "LAK",
    pointValueLak: 5000,
    rounding: "floor",
    roundingRule: "ROUNDDOWN",
    fixedBoxEntitlement: false,
    shippingIncluded: false,
    redemptionRule: "Redeem Points against Active/available products only",
    formula: "ROUNDDOWN((membershipFeeLak * (1 + bonusRate)) / 5000)"
  },
  subscriptions: [
    {
      id: "sub-1",
      category: "แพ็กเกจรายเดือน",
      name: "Starter",
      price: 999000,
      bonusRate: 10,
      rawShoppingValue: 1098900,
      points: 219,
      redeemableValue: 1095000,
      image: "https://images.unsplash.com/photo-1524546452178-5743b1f5cce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "เริ่มต้นง่าย รับโบนัสมูลค่า 10% ก่อนแปลงเป็น Point",
      benefits: [
        "รับ 219 Point ต่อเดือน",
        "1 Point = 5,000 LAK",
        "เลือกสินค้าที่ Active/พร้อมจำหน่ายได้ตาม Point",
        "ไม่มีจำนวนกล่องตายตัว และเศษ Point ปัดลงเสมอ"
      ],
      ctaLabel: "สมัคร Starter"
    },
    {
      id: "sub-2",
      category: "แพ็กเกจรายเดือน",
      name: "Recommended",
      price: 129000,
      bonusRate: 12,
      rawShoppingValue: 144480,
      points: 28,
      redeemableValue: 140000,
      image: "https://images.unsplash.com/photo-1628773822503-ae4dce8d56b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แพ็กเกจแนะนำ รับโบนัสมูลค่า 12% ก่อนแปลงเป็น Point",
      benefits: [
        "รับ 28 Point ต่อเดือน",
        "1 Point = 5,000 LAK",
        "เลือกสินค้าที่ Active/พร้อมจำหน่ายได้ตาม Point",
        "ไม่มีจำนวนกล่องตายตัว และเศษ Point ปัดลงเสมอ"
      ],
      featured: true,
      badgeText: "Recommended / แนะนำ",
      ctaLabel: "สมัคร Recommended"
    },
    {
      id: "sub-3",
      category: "แพ็กเกจรายเดือน",
      name: "Family",
      price: 169000,
      bonusRate: 15,
      rawShoppingValue: 194350,
      points: 38,
      redeemableValue: 190000,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แพ็กเกจครอบครัว รับโบนัสมูลค่า 15% ก่อนแปลงเป็น Point",
      benefits: [
        "รับ 38 Point ต่อเดือน",
        "1 Point = 5,000 LAK",
        "เลือกสินค้าที่ Active/พร้อมจำหน่ายได้ตาม Point",
        "ไม่มีจำนวนกล่องตายตัว และเศษ Point ปัดลงเสมอ"
      ],
      ctaLabel: "สมัคร Family"
    }
  ],
  shopSection: {
    sectionKey: "shop",
    sectionId: "shop",
    title: "สั่งซื้อสินค้าออนไลน์",
    subtitle: "ผักสลัดพรีเมียมและน้ำผลไม้สกัดเย็น ส่งตรงจากฟาร์ม",
    outOfStockBadge: "Out of Stock",
    outOfStockText: "สินค้าหมด",
    addToCartLabel: "เพิ่มลงตะกร้า",
    stockPrefix: "เหลือ",
    stockSuffix: "ชิ้น"
  },
  products: [
    {
      id: 1,
      name: "Premium Mixed Salad",
      category: "สลัดผักสด",
      price: 120,
      stock: 50,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "ผักสลัดออร์แกนิครวม ปลูกในระบบปิด 100%"
    },
    {
      id: 2,
      name: "Crispy Green Oak",
      category: "สลัดผักสด",
      price: 85,
      stock: 30,
      image: "https://images.unsplash.com/photo-1628773822503-ae4dce8d56b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "กรีนโอ๊ค กรอบ หวาน ไร้รสขม"
    },
    {
      id: 3,
      name: "Red Oak Lettuce",
      category: "สลัดผักสด",
      price: 85,
      stock: 25,
      image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "เรดโอ๊ค สีสวย อุดมด้วยวิตามิน"
    },
    {
      id: 4,
      name: "Detox Green Juice",
      category: "น้ำสกัดเย็น",
      price: 150,
      stock: 15,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "น้ำเคล แอปเปิ้ลเขียว เซเลอรี่ สกัดเย็น"
    },
    {
      id: 5,
      name: "Glow Orange Juice",
      category: "น้ำสกัดเย็น",
      price: 140,
      stock: 20,
      image: "https://images.unsplash.com/photo-1622597467836-f3824f1c1f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แครอท ส้ม ขิง สกัดเย็น บำรุงผิว"
    },
    {
      id: 6,
      name: "Beetroot Power",
      category: "น้ำสกัดเย็น",
      price: 150,
      stock: 0,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "บีทรูท มิกซ์เบอร์รี่ เพิ่มพลังงาน"
    }
  ],
  lab: {
    sectionKey: "lab",
    sectionId: "lab",
    title: "ระบบชั้นปลูก Plant Factory",
    paragraphs: [
      "ทุกต้นกล้าของเราเติบโตบนชั้นปลูกแนวตั้ง (Vertical Farming) ในสภาพแวดล้อมที่ถูกควบคุมอย่างสมบูรณ์แบบด้วยเทคโนโลยี AI และ IoT ทำให้ประหยัดพื้นที่และน้ำได้ถึง 90% เมื่อเทียบกับการปลูกแบบดั้งเดิม",
      "เราจำลองแสงอาทิตย์ด้วยหลอด LED Spectrum พิเศษที่เหมาะกับพืชแต่ละชนิด พนักงานทุกคนต้องสวมชุด Cleanroom Suit ก่อนเข้าพื้นที่ เพื่อป้องกันการปนเปื้อน ทำให้คุณมั่นใจได้ว่าผลิตภัณฑ์จาก The Plant Factory สะอาดบริสุทธิ์ถึงขีดสุด"
    ],
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageAlt: "ชั้น Plant Factory",
    stats: [
      {
        id: "pesticide",
        value: "0%",
        label: "การใช้ยาฆ่าแมลง"
      },
      {
        id: "production-days",
        value: "365",
        label: "วัน/ปี ที่ผลิตได้สม่ำเสมอ"
      }
    ]
  },
  footer: {
    sectionKey: "footer",
    copyright: "© 2026 The Plant Factory. All rights reserved.",
    links: [
      {
        id: "privacy-policy",
        label: "Privacy Policy",
        href: "#"
      },
      {
        id: "terms-of-service",
        label: "Terms of Service",
        href: "#"
      }
    ],
    adminControl: {
      actionKey: "open-admin",
      label: "Admin"
    }
  },
  aiWidget: {
    sectionKey: "ai-widget",
    provider: "gemini",
    apiKey: "",
    title: "Plant Factory AI",
    greeting:
      "สวัสดีครับ สนใจแพ็กเกจสมาชิก Starter, Recommended หรือ Family ไหมครับ ผมช่วยคำนวณ Point และแนะนำสินค้าที่เหมาะกับคุณได้",
    systemPrompt:
      "คุณคือ AI ของ Lao Plant Factory. ใช้กฎสมาชิก canonical MEMBERSHIP-POINTS-20260925 เท่านั้น: Starter 999,000 LAK โบนัส 10% = 219 Point; Recommended 129,000 LAK โบนัส 12% = 28 Point; Family 169,000 LAK โบนัส 15% = 38 Point. 1 Point = 5,000 LAK. สูตรคำนวณต้อง ROUNDDOWN/FLOOR เศษ Point ลงเสมอ ห้ามปัดขึ้น. ไม่มีสิทธิ์จำนวนกล่องตายตัว. Point ใช้เลือกสินค้าที่ Active/พร้อมจำหน่ายเท่านั้น. ค่าส่งแยกจาก Point ตามกฎจัดส่งปัจจุบัน. ห้ามอ้างราคาแพ็กเกจเดิม จำนวนกล่อง 6/8/10 หรือสิทธิ์กิโลกรัมแบบเก่า. ตอบสั้นก่อน สุภาพ ชัดเจน และหากข้อมูล stock/availability ไม่ยืนยัน ห้ามเดา."
  }
};

export default siteContent;

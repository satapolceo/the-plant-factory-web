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
      "สุดยอดซูเปอร์ฟู้ด ควบคุมการปลูกด้วยเทคโนโลยีแสง LED ในระบบปิด 100% สมัครสมาชิกวันนี้ รับผักเคลสดใหม่ ปลอดสารเคมี ทุกสัปดาห์",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1600&q=80",
    primaryButtonText: "ดูแพ็กเกจรายเดือน (Subscription)",
    secondaryButtonText: "ทำไมต้องระบบปิด?"
  },
  heroTitle: "ฟาร์มผักเคลระบบปิดอัจฉริยะ ส่งตรงถึงบ้านคุณ",
  heroSubtitle:
    "สุดยอดซูเปอร์ฟู้ด ควบคุมการปลูกด้วยเทคโนโลยีแสง LED ในระบบปิด 100% สมัครสมาชิกวันนี้ รับผักเคลสดใหม่ ปลอดสารเคมี ทุกสัปดาห์",
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
    eyebrow: "HOT MODEL 🔥",
    title: "แพ็กเกจสมาชิกรายเดือน (Subscription)",
    subtitle: "รับผักเคลและผักสลัดออร์แกนิคสดใหม่ ส่งตรงถึงหน้าบ้านคุณทุกสัปดาห์ ในราคาที่คุ้มค่ากว่า",
    priceSuffix: "/เดือน"
  },
  subscriptions: [
    {
      id: "sub-1",
      category: "แพ็กเกจรายเดือน",
      name: "Kale Lover Plan",
      price: 990,
      image: "https://images.unsplash.com/photo-1524546452178-5743b1f5cce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แพ็กเกจเริ่มต้นสำหรับคนรักผักเคล",
      benefits: [
        "ผักเคลสดพรีเมียม 1 กก. ทุกสัปดาห์",
        "จัดส่งฟรีรอบวันหยุด (เสาร์-อาทิตย์)",
        "สูตรอาหารพิเศษประจำสัปดาห์",
        "ยกเลิกหรือหยุดพักแพ็กเกจได้ตลอดเวลา"
      ],
      ctaLabel: "สมัครแพ็กเกจนี้"
    },
    {
      id: "sub-2",
      category: "แพ็กเกจรายเดือน",
      name: "Family Health Plan",
      price: 1590,
      image: "https://images.unsplash.com/photo-1628773822503-ae4dce8d56b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แพ็กเกจสุดคุ้มสำหรับสุขภาพครอบครัว",
      benefits: [
        "สลัดรวมและผักเคล 2 กก. ทุกสัปดาห์",
        "จัดส่งฟรีรอบวันหยุด (เสาร์-อาทิตย์)",
        "ส่วนลด 10% สำหรับสั่งซื้อสินค้าปลีก",
        "รับฟรีกระเป๋าเก็บความเย็น (เฉพาะเดือนแรก)"
      ],
      featured: true,
      badgeText: "Best Seller / ยอดนิยม",
      ctaLabel: "สมัครแพ็กเกจนี้"
    },
    {
      id: "sub-3",
      category: "แพ็กเกจรายเดือน",
      name: "Green Detox Plan",
      price: 1890,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "แพ็กเกจเคลียร์สารพิษและทำความสะอาดร่างกาย",
      benefits: [
        "ผักสลัด 1 กก. พร้อมน้ำสกัดเย็น 4 ขวด/สัปดาห์",
        "จัดส่งฟรี 2 รอบต่อสัปดาห์ (เลือกวันได้)",
        "การดูแลโภชนาการแบบ VIP",
        "ส่วนลด 15% สำหรับสั่งซื้อสินค้าปลีก"
      ],
      ctaLabel: "สมัครแพ็กเกจนี้"
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
    greeting: "สวัสดีครับ มีผักหรือแพ็กเกจไหนที่อยากให้ช่วยแนะนำเป็นพิเศษไหมครับ",
    systemPrompt:
      "คุณคือผู้ช่วย AI ของ The Plant Factory ให้คำแนะนำเรื่องผักสลัด ระบบปลูกพืช และแพ็กเกจสมาชิกอย่างกระชับ สุภาพ และเข้าใจง่าย"
  }
};

export default siteContent;

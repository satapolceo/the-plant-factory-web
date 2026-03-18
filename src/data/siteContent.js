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
  ]
};

export default siteContent;

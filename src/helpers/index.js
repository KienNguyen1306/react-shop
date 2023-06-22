export function mappingMenus(item) {
  return {
    title: item.name,
    link: item.id,
    Children: item.Children ? item.Children.map(mappingMenus()) : [],
  };
}

export function mappingMenusData(array) {
  return [
    {
      title: "Trang Chủ",
      link: "/",
      Children: [],
    },
    {
      title: "Giới Thiệu",
      link: "/about",
      Children: [],
    },
    {
      title: "Loại Sản Phẩm",
      link: "/",
      Children: [...array],
    },
    {
      title: "Tin Tức",
      link: "/",
      Children: [],
    },
    {
      title: "Liên Hệ",
      link: "/contact",
      Children: [],
    },
  ];
}

export function formattingVND(vnd) {
  return vnd.toLocaleString("vi", { style: "currency", currency: "VND" });
}

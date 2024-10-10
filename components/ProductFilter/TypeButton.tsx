"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

const product_type = [
  {
    key: "notebook",
    text: "Notebook",
  },
  
  {
    key: "computer",
    text: "คอมพิวเตอร์",
  },
  {
    key: "mornitor",
    text: "จอคอม",
  },
  {
    key: "printer",
    text: "ปริ้นเตอร์",
  },
];

interface ProductFilterProps {
    onFilterChange: (selectedKeys: Set<any>) => void;
  }

export default function TypeButton({ onFilterChange }: ProductFilterProps) {
    // const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());
  
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());
    
    const handleSelectionChange = (keys: Selection) => {
      setSelectedKeys(keys);
      const selectedKeysSet = new Set<any>(Array.from(keys));
    onFilterChange(selectedKeysSet);
    //   onFilterChange(keys); 
    };
  // ค้นหาสินค้าทั้งหมดที่ถูกเลือก
  const selectedProducts = React.useMemo(() => {
    const selectedArray = Array.from(selectedKeys); // แปลง Set เป็น array
    return product_type.filter(item => selectedArray.includes(item.key));
  }, [selectedKeys]);

  // สร้างข้อความสำหรับแสดงสินค้าที่ถูกเลือก
  const selectedText = selectedProducts.map(item => item.text).join(", ") || "เลือกประเภทสินค้า";

  return (
    <>
    <div className="flex">
      
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
      
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        // disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        
      >
        {product_type.map((data) => (
          <DropdownItem  key={data.key}>{data.text}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
    </div>
    
    </>
  );
}
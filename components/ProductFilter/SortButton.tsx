"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  type Selection as SharedSelection,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

const sort_list = [
  {
    key: "high_to_low",
    text: "จากราคามากไปต่ำ",
  },
  {
    key: "low_to_high",
    text: "จากราคาต่ำไปมาก",
  },
  {
    key: "latest",
    text: "ล่าสุด",
  },
  {
    key: "oldest",
    text: "เก่าสุด",
  },
];

interface SortButtonProps {
  onSortChange: (sortKey: any) => void; // ฟังก์ชันสำหรับส่งค่ากลับไปที่ BlogPage
}

export default function SortButton({ onSortChange }: SortButtonProps) {
  const [selectedKey, setSelectedKey] = React.useState<string | any>(null);

  const handleSelectionChange = (keys: any) => {
    const key = Array.from(keys)[0] || null; // ดึงค่าจาก SharedSelection
    setSelectedKey(key);
    onSortChange(key || ""); // ส่งค่าที่เลือกกลับไป
  };

  // สร้างข้อความสำหรับแสดงการเรียงลำดับที่ถูกเลือก
  const selectedText = selectedKey ? sort_list.find(item => item.key === selectedKey)?.text : "เรียงจาก";

  return (
    <div className="flex">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedText}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Sort options"
          variant="flat"
          // disallowEmptySelection
          closeOnSelect={true} // เปลี่ยนเป็น true เพื่อปิดเมนูเมื่อเลือก
          selectionMode="single"
          selectedKeys={selectedKey ? new Set([selectedKey]) : new Set()}
          onSelectionChange={handleSelectionChange}
        >
          {sort_list.map((data) => (
            <DropdownItem key={data.key}>{data.text}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
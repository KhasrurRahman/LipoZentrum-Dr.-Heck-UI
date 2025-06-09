import Image from "next/image";
import Link from "next/link";
import { role } from "@/lib/data";
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "subadmin"],
      },
      {
        icon: "/student.png",
        label: "Patients",
        href: "/list/patients",
        visible: ["admin","subadmin"],
      },
      {
        icon: "/calendar.png",
        label: "Appointments",
        href: "/appointment",
        visible: ["admin"],
      },
      {
        icon: "/parent.png",
        label: "New Contacts",
        href: "/list/NewContact",
        visible: ["admin"],
      },
      {
        icon: "/subject.png",
        label: "Email",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "SMS",
        href: "/list/classes",
        visible: ["admin"],
      },
      {
        icon: "/lesson.png",
        label: "Payments",
        href: "/list/lessons",
        visible: ["admin", "subadmin"],
      },
      {
        icon: "/exam.png",
        label: "Newsletters",
        href: "/list/exams",
        visible: ["admin"],
      },
      {
        icon: "/assignment.png",
        label: "Game Panel",
        href: "/list/assignments",
        visible: ["admin"],
      },
      {
        icon: "/result.png",
        label: "Log Management",
        href: "/list/results",
        visible: ["admin", "subadmin"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "subadmin"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "subadmin"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "subadmin"],
      },
    ],
  },
];


const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  )
}



export default Menu
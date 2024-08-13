"use client";
import { SignOutButton } from "@clerk/nextjs";
import { Add, Logout, Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function TopBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          className="search-bar"
          type="text"
          placeholder="Search posts, people,..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <Search className="search-icon" />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-new-post")}
      >
        <Add /> Create a post
      </button>
      <div className="flex gap-3 items-center md:hidden">
        <div>
          <SignOutButton>
            <div className="flex gap-4">
              <Logout sx={{ color: "white", fontSize: "32px" }} />{" "}
            </div>
          </SignOutButton>
        </div>
        <Link href={"/"}>
          <Image
            src={"/assets/phucmai.png"}
            width={50}
            height={50}
            alt="profile avatar"
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;

import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { Logout } from "@mui/icons-material";

function LeftSideBar() {
  const isLoggedIn = true;
  return (
    <div className=" left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-10 max-md:hidden custom-scrollbar">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          width={200}
          height={200}
          alt="logo"
        ></Image>
      </Link>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={"/"}>
            <Image
              src={"/assets/phucmai.png"}
              width={50}
              height={50}
              alt="profile avatar"
              className="rounded-full"
            ></Image>
          </Link>
          <p className="text-small-bold">Nguyen Hieu</p>
        </div>
        <div className="w-full flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Follower</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/sign-in" />
          <p className="text-light-1 text-body-bold">Manager Account</p>
        </div>
        <div>
          <SignOutButton>
            <div className="flex gap-4">
              <Logout sx={{ color: "white", fontSize: "32px" }} />{" "}
              <p className="text-light-1 text-body-bold">Logout</p>
            </div>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;

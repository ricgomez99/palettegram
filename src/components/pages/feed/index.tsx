"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { User, Bookmark } from "react-feather";
import { useRouter } from "next/navigation";

import CreatePost from "@/components/core/createPost";
import Posts from "@/components/core/posts";
import TrendingFeed from "@/components/core/trendingFeed";
import Footer from "@/components/core/footer";

const Feed = () => {
  const userDetails = useSelector((state: any) => state.auth);
  const router = useRouter();

  return (
    <>
      <main className="flex max-w-screen-lg mx-auto pt-8 content-center">
        <div className="flex-1 sticky flex flex-col items-center gap-8">
          <Link
            href={`/user/${userDetails.creds.userId}`}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md dark:shadow-gray-600 transition-all duration-300 text-black dark:text-white hover:text-primary-light border hover:border-primary-light"
          >
            <User size={20} />
          </Link>
          <Link
            href="/user/bookmarks"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md dark:shadow-gray-600 transition-all duration-300 text-black dark:text-white hover:text-primary-light border hover:border-primary-light"
          >
            <Bookmark size={20} />
          </Link>
        </div>
        <div className="flex-[5]">
          <CreatePost />
          <Posts />
        </div>
        <div className="flex-[2] hidden md:block">
          <TrendingFeed />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Feed;

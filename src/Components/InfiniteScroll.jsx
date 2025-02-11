import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useRef, useCallback } from "react";
import axios from "axios";

const fetchUsers = async ({ pageParam = 1 }) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/photos?_limit=3&_page=${pageParam}`
	);
    console.log(response.data);
	return response.data;
};

const InfiniteScroll = () => {
	const observerRef = useRef(null);

	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length === 3 ? pages.length + 1 : undefined;
		},
	});

	const lastElementRef = useCallback(
		(node) => {
			if (isFetchingNextPage || !hasNextPage) return;
			if (observerRef.current) observerRef.current.disconnect();

			observerRef.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						fetchNextPage();
					}
				},
				{ threshold: 1 }
			);

			if (node) observerRef.current.observe(node);
		},
		[fetchNextPage, hasNextPage, isFetchingNextPage]
	);

	return (
		<div className="p-10">
			{isLoading && (
				<div className="flex justify-center items-center h-screen">
					<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
				</div>
			)}

			{error && (
				<p className="text-red-500 text-center">Error: {error.message}</p>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10 ">
				{data?.pages.map((group, i) => (
					<React.Fragment key={i}>
						{group.map((user, index) => {
							const isLastItem =
								i === data.pages.length - 1 && index === group.length - 1;
                                console.log("user", user.url)
							return (
								<div
									key={user.id}
									ref={isLastItem ? lastElementRef : null}
									className="border shadow-lg p-4 h-90 rounded-lg bg-white"
								>
								<img className="w-full h-64 object-cover" src={user.url} alt={user.title} />

									<h2 className="text-lg font-bold">{user.title}</h2>
									<p className="text-gray-600">
										{user.title || "No description"}
									</p>
								</div>
							);
						}
                        )}
					</React.Fragment>
				))}
			</div>

			{isFetchingNextPage && (
				<div className="flex justify-center items-center mt-10">
					<div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
				</div>
			)}
		</div>
	);
};

export default InfiniteScroll;

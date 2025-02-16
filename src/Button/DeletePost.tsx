import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

interface DeletePostProps {
  userId: number;
}

const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3000/users/${id}`);
};

const DeletePost: React.FC<DeletePostProps> = ({ userId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, number>({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleDelete = () => {
    mutation.mutate(userId);
  };

  return (
    <button
      className="bg-green-500 px-4 py-2 rounded-xl text-white hover:bg-green-600 transition"
      type="button"
      onClick={handleDelete}
      disabled={mutation.isLoading}
    >
      {mutation.isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeletePost;

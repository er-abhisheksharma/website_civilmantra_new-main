"use client"

import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Slider from 'react-slick';
import DeleteModal from '../DeleteModal';
import TestimonialSkeleton from '../TestimonialSkel';
import sliderrightarrow from "../../../public/blogs/sliderrightarrow2.svg"
import sliderleftarrow from "../../../public/blogs/sliderleftarrow2.svg"
import searchicon from "../../../public/blogs/search.svg";
import blogauthor from "../../../public/blogs/blogauthor.png";
import editicon from "../../../public/blogs/editicon.svg";
import deleteicon from "../../../public/blogs/deleteicon.svg";

// Left and Right Arrow components for Slider
function RightArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <img
                src={sliderrightarrow}
                alt="Next"
                style={{ width: "30px", height: "30px" }}
            />
        </div>
    );
}

function LeftArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <img
                src={sliderleftarrow}
                alt="Prev"
                style={{ width: "40px", height: "40px" }}
            />
        </div>
    );
}

const TestimonialPanelPost = () => {

    const [testimonialsPosts, setTestimonialsPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <RightArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <LeftArrow className={undefined} style={undefined} onClick={undefined} />,
    };


    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://cipl.aimantra.info/website/testimonialsList/');  // 
                const data = await response.json();
                setTestimonialsPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    // Handle delete modal
    const openConfirmModal = (postId: number) => {
        setSelectedPostId(postId);
        setIsModalOpen(true);
    };

    const closeConfirmModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async (postId: number) => {
        // Handle delete API call
        try {
            await fetch(`https://cipl.aimantra.info/website/testimonialsList/${postId}`, {
                method: 'GET',
            });
            setTestimonialsPosts((prevPosts) =>
                prevPosts.filter((post) => post.client_Testimonials_ID !== postId)
            );
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error deleting testimonial:', error);
        }
    };

    // Handle edit logic
    const handleEdit = (postId: number) => {
        console.log('Edit post', postId);
        // Logic for edit
    };

    return (
        <>
            <div className="testimonialpanelpost max-w-7xl mx-auto px-4 py-12">
                <ToastContainer />
                <DeleteModal
                    posttype={"Testimonial Post"}
                    isOpen={isModalOpen}
                    onClose={closeConfirmModal}
                    onConfirm={() => handleDelete(selectedPostId as number)}
                />
                <div className="flex flex-wrap justify-between">
                    <h2 className="text-4xl font-bold mb-8 text-star">
                        Recent <span className="mainred">Testimonial Post</span>
                    </h2>
                    <div className="w-[30%] p-2 px-6 h-12 flex gap-2 items-center cursor-pointer bg-white rounded-lg border-2">
                        <img src={searchicon} alt="Search Blogs" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none"
                        />
                    </div>
                </div>

                {loading && (
                    <div className="flex items-center justify-between gap-2">
                        <TestimonialSkeleton cards={3} />
                    </div>
                )}

                <Slider {...settings}>
                    {testimonialsPosts.map((post) => (
                        <div
                            key={post.client_Testimonials_ID}
                            className="group bg-[#FAFAFA] relative !h-[35vh] cursor-pointer w-auto border-[1px] hover:border-gray-300 border-gray-200 p-4 rounded-xl hover:bg-white shadow-[0_0_30px_0px_rgba(0,0,0,0.03)] hover:shadow-none transition-all"
                        >
                            <div className="flex items-center justify-start gap-4 min-h-[10dvh] mb-2">
                                <img
                  src={blogauthor}
                  alt={post.company_Name}
                  className="w-14 h-14 rounded-full"
                />
                                <div className="flex flex-col items-start justify-center gap-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="group-hover:text-[#990000] text-xl font-semibold">
                                            {post.name}
                                        </h3>

                                        <div className="absolute top-4 right-4 flex space-x-3">
                                            <button
                                                onClick={() => handleEdit(post.client_Testimonials_ID)}
                                                className="bg-[#f4eaea] text-red-500 p-2 rounded-full hover:bg-red-200 transition duration-200"
                                            >
                                                <img
                                                    src={editicon}
                                                    alt="Edit Testimonial"
                                                />
                                            </button>
                                            <button
                                                onClick={() => openConfirmModal(post.client_Testimonials_ID)}
                                                className="bg-[#f4eaea] text-red-500 p-2 rounded-full hover:bg-red-200 transition duration-200"
                                            >
                                                <img
                                                    src={deleteicon}
                                                    alt="Delete Testimonial"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {post.company_Name}
                                    </p>
                                </div>
                            </div>

                            <span className="text-xl font-medium mainblue">
                                {post.position}
                            </span>

                            <p
                                className="mt-2 text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: post.reviews
                                        ? post.reviews.slice(0, 150) + (post.reviews.length > 150 ? "..." : "")
                                        : "No reviews available.",
                                }}
                            />


                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default TestimonialPanelPost;

"use client";

import type React from "react";
import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "../../styles/TestimonialsCarousel.module.scss";

// Enhanced Testimonial interface
interface Testimonial {
	id: number;
	name: string;
	location: string;
	quote: string;
	image: StaticImageData;
}

// Default image import
import profile1 from "../assets/profile.png";
import profile2 from "../assets/profile.png"; // Replace with different images if available
import profile3 from "../assets/profile.png";

import up from "../assets/up.png";
import down from "../assets/down.png";

interface TestimonialsCarouselProps {
	testimonials?: Testimonial[];
	title?: string;
	subTitle?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
	testimonials: propTestimonials = [],
	subTitle = "Testimonials",
	title = "What People Say About Us.",
}) => {
	// Default testimonials with structured content
	const defaultTestimonials: Testimonial[] = [
		{
			id: 1,
			name: "Mike Taylor",
			location: "Lahore, Pakistan",
			quote:
				"Incredible experience with this service. Their attention to detail and customer support is unmatched. I highly recommend them to anyone looking for top-quality solutions.",
			image: profile1,
		},
		{
			id: 2,
			name: "Sarah Johnson",
			location: "Toronto, Canada",
			quote:
				"A game-changing product that exceeded all my expectations. The team's professionalism and innovative approach truly set them apart from the competition.",
			image: profile2,
		},
		{
			id: 3,
			name: "Carlos Rodriguez",
			location: "Madrid, Spain",
			quote:
				"Transformative service that delivered exactly what was promised. Their commitment to excellence is evident in every interaction.",
			image: profile3,
		},
	];

	// Use provided testimonials or fallback to default
	const testimonialsList =
		propTestimonials.length > 0 ? propTestimonials : defaultTestimonials;

	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prev) =>
			prev === 0 ? testimonialsList.length - 1 : prev - 1,
		);
	};

	const handleNext = () => {
		setActiveIndex((prev) =>
			prev === testimonialsList.length - 1 ? 0 : prev + 1,
		);
	};

	// Calculate adjacent cards
	const prevIndex =
		activeIndex === 0 ? testimonialsList.length - 1 : activeIndex - 1;
	const nextIndex =
		activeIndex === testimonialsList.length - 1 ? 0 : activeIndex + 1;

	// Render a card with structured testimonial content
	const renderCard = (testimonial: Testimonial, cardStyle: string) => (
		<div className={`${styles.carouselCard} ${cardStyle}`}>
			<div className={styles.cardContent}>
				<div className={styles.cardProfile}>
					<Image
						src={testimonial.image}
						alt={testimonial.name}
						width={64}
						height={64}
						className={styles.profileImage}
						priority
					/>
				</div>

				<div>
					<p className={styles.cardQuote}>"{testimonial.quote}"</p>
					<div className={styles.profileInfo}>
						<h3 className={styles.cardName}>{testimonial.name}</h3>
						<p className={styles.cardLocation}>{testimonial.location}</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className={styles.testimonialsSection}>
			<div >
				<div className="row">
					<div className="col-md-6">
						<h3 className={`${styles.subtitle}`}> {subTitle}</h3>
						<h1 className={styles.mainTitle}>{title}</h1>
						<div className={styles.dots}>
							<div className={styles.dotDart}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
						</div>
					</div>

					{testimonialsList.length > 0 && (
						<div className="col-md-6">
							<div className={styles.carouselContainer}>
								<div className={styles.carouselTrack}>
									{/* Previous Card (top, partially visible) */}
									{renderCard(testimonialsList[prevIndex], styles.prevCard)}

									{/* Active Card (center) */}
									{renderCard(testimonialsList[activeIndex], styles.activeCard)}

									{/* Next Card (bottom, partially visible) */}
									{renderCard(testimonialsList[nextIndex], styles.nextCard)}
								</div>

								{testimonialsList.length > 1 && (
									<div className={styles.carouselControls}>
										<button onClick={handlePrev} className={styles.arrowButton}>
											<Image
												src={up}
												alt="Up Arrow"
												width={20}
												height={20}
												priority
											/>
										</button>
										<button onClick={handleNext} className={styles.arrowButton}>
											<Image
												src={down}
												alt="down Arrow"
												width={20}
												height={20}
												priority
											/>
										</button>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCarousel;

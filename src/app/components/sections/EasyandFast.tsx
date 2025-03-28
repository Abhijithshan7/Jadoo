import React from "react";
import styles from "../../styles/easyandFast.module.scss";
import Image from "next/image";
import selection from "../assets/selection.png";
import taxi from "../assets/taxi.png";
import watersport from "../assets/water-sport.png";
import Triptorome from "../assets/Triptorome.png";
import TripToGreece from "../assets/TripToGreece.png";

import Building from "../assets/Building.png";
import Heart from "../assets/Heart.png";
import leaf from "../assets/leaf.png";
import map from "../assets/map.png";
import sendIcon from "../assets/sendIcon.png";

// Define interface for step data
interface StepData {
	id: number;
	icon: StaticImageData;
	title: string;
	description: string;
	iconColor: string;
}

// Define interface for trip data
interface TripData {
	id: number;
	title: string;
	date: string;
	author: string;
	image: StaticImageData;
	people: number;
}

// Define interface for ongoing trip data
interface OngoingTripData {
	id: number;
	title: string;
	image: StaticImageData;
	progress: number;
}

// Mock data - in a real app, this would come from an API or database
const STEPS_DATA: StepData[] = [
	{
		id: 1,
		icon: selection,
		title: "Choose Destination",
		description:
			"Select your dream destination from our curated list of amazing locations.",
		iconColor: "stepIcon1",
	},
	{
		id: 2,
		icon: watersport,
		title: "Make Payment",
		description:
			"Complete your secure payment and confirm your exciting journey.",
		iconColor: "stepIcon2",
	},
	{
		id: 3,
		icon: taxi,
		title: "Reach Airport on Selected Date",
		description:
			"Arrive at the airport on time and begin your unforgettable adventure.",
		iconColor: "stepIcon3",
	},
];

const TRIP_DATA: TripData = {
	id: 1,
	title: "Trip To Greece",
	date: "14-28 June",
	author: "Robbin",
	image: TripToGreece,
	people: 24,
};

const ONGOING_TRIP: OngoingTripData = {
	id: 1,
	title: "Trip to Rome",
	image: Triptorome,
	progress: 40,
};

// Reusable Progress Bar Component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
	return (
		<div className={styles.progressContainer}>
			<div className={styles.progressBar} style={{ width: `${progress}%` }} />
		</div>
	);
};

const TravelBooking: React.FC = () => {
	return (
		<div className={`${styles.travelBooking} container py-5`}>
			<div className="row">
				{/* Booking Steps Section */}
				<div className="col-lg-6 mb-5 mb-lg-0">
					<div className={styles.bookingSteps}>
						<h2 className={`${styles.subtitle} mb-3`}>Easy and Fast</h2>
						<h1 className={`${styles.title} mb-4`}>
							Book Your Next Trip
							<br />
							In 3 Easy Steps
						</h1>

						<div className={styles.stepCardSection}>
							{STEPS_DATA.map((step) => (
								<div key={step.id} className={styles.stepCard}>
									<div className={styles[step.iconColor]}>
										<Image
											src={step.icon}
											alt={step.title}
											width={24}
											height={24}
											priority
										/>
									</div>
									<div className={styles.stepContent}>
										<h3 className={styles.stepTitle}>{step.title}</h3>
										<p className={styles.stepDescription}>{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Trip Card Section */}
				<div
					className={`${styles.tripCardMAin} col-lg-6 d-flex align-items-center`}
				>
					<div className={styles.colorBlur}> </div>
					<div className={styles.tripCard}>
						{/* Main Trip Image */}
						<div className={styles.tripImage}>
							<Image
								src={TRIP_DATA.image}
								alt={TRIP_DATA.title}
								layout="responsive"
								priority
							/>
						</div>

						{/* Trip Info */}
						<div className={styles.tripInfo}>
							<h3 className={styles.tripTitleName}>{TRIP_DATA.title}</h3>
							<div className="d-flex gap-3">
								<h3 className={styles.tripName}>{TRIP_DATA.date}</h3>
								<h3 className={styles.tripName}>{TRIP_DATA.author}</h3>
							</div>

							<div className={styles.tripInfoIcons}>
								<div className={styles.Icon}>
									{" "}
									<Image
										src={leaf}
										alt={ONGOING_TRIP.title}
										width={14}
										height={14}
										priority
									/>
								</div>
								<div className={styles.Icon}>
									{" "}
									<Image
										src={map}
										alt={ONGOING_TRIP.title}
										width={14}
										height={14}
										priority
									/>
								</div>
								<div className={styles.Icon}>
									{" "}
									<Image
										src={sendIcon}
										alt={ONGOING_TRIP.title}
										width={14}
										height={14}
										priority
									/>
								</div>
							</div>

							<div className={styles.tripInfoBottom}>
								<div className="d-flex gap-3">
									{" "}
									<Image
										src={Building}
										alt="Building"
										width={16}
										height={16}
										priority
									/>
                  	<h2 >
									
									{TRIP_DATA.people} <span>people going</span>
								</h2>
								</div>
							
								<div>
									{" "}
									<Image
										src={Heart}
										alt="Heart"
										width={16}
										height={16}
										priority
									/>
								</div>
							</div>
						</div>

						{/* Ongoing Trip Card */}
						<div className={styles.tripCard2}>
							<Image
								src={ONGOING_TRIP.image}
								alt={ONGOING_TRIP.title}
								width={50}
								height={50}
								priority
							/>

							<div>
								<div>
									<h4>Ongoing</h4>
									<h2>{ONGOING_TRIP.title}</h2>
								</div>
								<div>
									<h4>
										{ONGOING_TRIP.progress}% <span>completed</span>
									</h4>
									<ProgressBar progress={ONGOING_TRIP.progress} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelBooking;

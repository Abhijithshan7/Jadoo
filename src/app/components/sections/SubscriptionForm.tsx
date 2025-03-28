import React from "react";
import Image from "next/image";

import styles from "../../styles/SubscriptionForm.module.scss";

import share from "../assets/share.png";
import subBg from "../assets/subBg.png";
import subBgImg1 from "../assets/subBgImg1.png";
import subBgImg2 from "../assets/subBgImg2.png";
import mailIcon from "../assets/mailIcon.png";

const SubscriptionForm = () => {
	return (
	<div className={styles.Section}>
			<div className={styles.SubscriptionSection}>
			<div className={styles.subCard}>
				<div className={styles.shareimg}>
					<Image src={share} alt="" width={50} height={50} priority />
				</div>
				<div className={styles.subBgImg1}></div>
				<div className={styles.subBgImg2}></div>

				<div className={styles.subContent}>
					<h1>
						Subscribe to get information, latest news and other interesting
						offers about Jadoo
					</h1>

					<div className={`${styles.SubscriptionBtn}  gap-3 justify-content-center`}>
						<div className={`${styles.inputWrapper} d-flex gap-3 align-items-center `}>
							<Image src={mailIcon} alt="" width={21} height={18} priority />
							<input type="email" placeholder="Your email" />
						</div>
						<button>Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default SubscriptionForm;
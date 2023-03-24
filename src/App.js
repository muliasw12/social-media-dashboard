import './App.css';
import CustomCheckbox from './components/customCheckbox/CustomCheckbox';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import { useState } from 'react';

const bigCardData = [
	{
		icon: "facebook",
		username: "gummymule",
		followersCount: 1987,
		stats: 12,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid hsl(210, 78%, 56%)" }
	},
	{
		icon: "twitter",
		username: "gummymule",
		followersCount: 1044,
		stats: 99,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid hsl(210, 78%, 56%)" }
	},
	{
		icon: "instagram",
		username: "gummymule",
		followersCount: "11k",
		stats: 1099,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid pink" }
	},
	{
		icon: "youtube",
		username: "Mulia S.",
		followersCount: "8239",
		stats: "144",
		type: "Subscribers",
		increased: false,
		style: { borderTop: "4px solid red" }
	},
]

const overviewData = [
	{
		icon: "facebook",
		text: "Page Views",
		count: 87,
		stats: 3,
		increased: true
	},
	{
		icon: "facebook",
		text: "Likes",
		count: 52,
		stats: 2,
		increased: false
	},
	{
		icon: "instagram",
		text: "Likes",
		count: 5462,
		stats: 2257,
		increased: true
	},
	{
		icon: "instagram",
		text: "Profile Views",
		count: "52k",
		stats: 1375,
		increased: true
	},
	{
		icon: "twitter",
		text: "Retweets",
		count: "117",
		stats: 303,
		increased: true
	},
	{
		icon: "twitter",
		text: "Likes",
		count: "507",
		stats: 553,
		increased: true
	},
	{
		icon: "youtube",
		text: "Likes",
		count: "107",
		stats: 19,
		increased: false
	},
	{
		icon: "youtube",
		text: "Total Views",
		count: "1407",
		stats: 12,
		increased: false
	},
]

function App() {

	const [isChecked, setIsChecked] = useState(false)
	const [lightMode, setLightMode] = useState(false)
	return (
		<div className={lightMode ? "App light" : "App"}>
			<div className="container">
				<header>
					<div className="header-text">
						<h2>Social Media Dashboard</h2>
						<p>Total Followers: 23,004</p>
					</div>
					<span className="border"></span>
					<div className="togglerCont">
						<span className='label'>Dark Mode</span>
						<CustomCheckbox
							isChecked={isChecked}
							setIsChecked={setIsChecked}
							lightMode={lightMode}
							setLightMode={setLightMode}
						/>
					</div>
				</header>
				<div className="current-data-box" >
					{bigCardData.map((data, index) => {
						return (
							<BigCard
								key={index}
								icon={data.icon}
								username={data.username}
								followersCount={data.followersCount}
								stats={data.stats}
								type={data.type}
								increased={data.increased}
								style={data.style}
								lightMode={lightMode}
							/>
						)
					})}
				</div>
				<h2 className='overview-text'>Overview - Today</h2>
				<div className="overview-section">
					{overviewData.map((data, index) => {
						return (
							<SmallCard
								key={index}
								icon={data.icon}
								text={data.text}
								count={data.count}
								stats={data.stats}
								increased={data.increased}
								lightMode={lightMode}
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default App;

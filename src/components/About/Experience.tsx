import CardExperience from "./CardExperience"


export default function Experience() {

    return (
        <div className="max-w-[1200px] px-5 mx-auto w-full ">
            <div>
                <h2 className="text-white font-bold text-[32px]">Navigating the Estatein Experience</h2>
                <p className="text-[#999999] text-[20px]">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="lg:flex gap-5">
                    <CardExperience
                        stepNumber={1}
                        title="Discover a World of Possibilities"
                        description="Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,"

                    />
                    <CardExperience
                        stepNumber={2}
                        title="Narrowing Down Your Choices"
                        description="Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."

                    />
                    <CardExperience
                        stepNumber={3}
                        title="Personalized Guidance"
                        description="Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."

                    />
                </div>
                <div className="lg:flex gap-5">
                    <CardExperience
                        stepNumber={4}
                        title="See It for Yourself"
                        description="Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."

                    />
                    <CardExperience
                        stepNumber={5}
                        title="Making Informed Decisions"
                        description="Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."

                    />
                    <CardExperience
                        stepNumber={6}
                        title="Getting the Best Deal"
                        description="We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms. "

                />
                    </div>

             

            </div >
        </div >


    )

}

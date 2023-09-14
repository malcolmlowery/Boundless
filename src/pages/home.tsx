import StarRatings from 'react-star-ratings';
import '../styles/home.css';
import solarPanelImage_01 from '../assets/images/solar-panel-01.png';
import solarPanelImage_02 from '../assets/images/solar-panel-02.png';
import solarPanelImage_03 from '../assets/images/solar-panel-03.png';
import houseImage_01 from '../assets/images/house-01.png';
import houseImage_02 from '../assets/images/house-02.png';
import houseImage_03 from '../assets/images/house-03.png';
import arrowRightIcon_01 from '../assets/icons/arrow-right-icon-01.png';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

const Home = () => {
    return(
        <div className='home-container'>
            <section className='home-container__hero-section'>
                <img alt='solar panel' src={solarPanelImage_01} />
                <h1 className='home-container__hero-section__slogan'>
                    <span>Solar Redefined: </span> 
                    Your Journey to a <br/> Better Solar Experience
                </h1>
                <p className='home-container__hero-section__mission-statement'>
                    Over 2.5 million homeowners across the country have already 
                    made the smart decision to upgrade to solar. Join the movement 
                    and see an average home value increase of 4.1%.
                </p>
                <div className='home-container__hero-section__buttons-group'>
                    <Button type='fill' style={{ background: '#5FB428', marginRight: 16, paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16 }}>Get a Free Quote</Button>
                    <Button type='fill' style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 16, paddingBottom: 16 }}>See if I Qualify</Button>
                </div>
            </section>

            <section className='home-container__customer-reviews'>
                <h1 className='home-container__customer-reviews__title'>What our Customers Have To Say</h1>
                <div className='home-container__customer-reviews__review-group'>
                    <div className='home-container__customer-reviews__review-group__card'>
                        <div className='home-container__customer-reviews__review-group__card__header'>
                            <img alt='image of a person' src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=800' />
                            <h3>Shelton Roe</h3>
                            <span className='spacer'></span>
                            <StarRatings rating={5} numberOfStars={5} starSpacing='2px' starDimension='18px' starRatedColor='#ffd97f' />
                        </div>
                        <div className='home-container__customer-reviews__review-group__card__body'>
                            <p>
                                I am incredibly satisfied with my decision to go solar with 
                                Solar Panel Company. Their team was professional, 
                                knowledgeable, and guided me through the entire process. 
                                Not only did they provide high-quality solar panels, but 
                                they also helped me maximize my energy savings. I highly 
                                recommend Boundless for their excellent service and top-notch 
                                products.
                            </p>
                        </div>
                    </div>

                    <div className='home-container__customer-reviews__review-group__card'>
                        <div className='home-container__customer-reviews__review-group__card__header'>
                            <img alt='image of a person' src='https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800' />
                            <h3>Chelsea K.</h3>
                            <span className='spacer'></span>
                            <StarRatings rating={5} numberOfStars={5} starSpacing='2px' starDimension='18px' starRatedColor='#ffd97f' />
                        </div>
                        <div className='home-container__customer-reviews__review-group__card__body'>
                            <p>
                                I recently had this company install solar panels on my 
                                roof, and I'm extremely impressed with their service. The entire 
                                process was smooth, and their team was friendly and accommodating. 
                            </p>
                        </div>
                    </div>

                    <div className='home-container__customer-reviews__review-group__card'>
                        <div className='home-container__customer-reviews__review-group__card__header'>
                            <img alt='image of a person' src='https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800' />
                            <h3>Cheryl Smith</h3>
                            <span className='spacer'></span>
                            <StarRatings rating={5} numberOfStars={5} starSpacing='2px' starDimension='18px' starRatedColor='#ffd97f' />
                        </div>
                        <div className='home-container__customer-reviews__review-group__card__body'>
                            <p>
                                Kudos to Boundless for their exceptional solar panel installation! 
                                Their team was punctual, respectful, and demonstrated remarkable 
                                attention to detail. The quality of the panels is outstanding, and 
                                I appreciate their commitment to using sustainable and 
                                eco-friendly materials. I'm delighted to be generating 
                                clean energy and reducing my carbon footprint. Thank you, 
                                Boundless, for delivering on your promises.
                            </p>
                        </div>
                    </div>

                    <div className='home-container__customer-reviews__review-group__card'>
                        <div className='home-container__customer-reviews__review-group__card__header'>
                            <img alt='image of a person' src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800' />
                            <h3>Floyd D.</h3>
                            <span className='spacer'></span>
                            <StarRatings rating={5} numberOfStars={5} starSpacing='2px' starDimension='18px' starRatedColor='#ffd97f' />
                        </div>
                        <div className='home-container__customer-reviews__review-group__card__body'>
                            <p>
                                I couldn't be happier with the solar panel system installed. From the
                                initial consultation to the final installation, their team displayed 
                                exceptional professionalism and expertise. They answered all my 
                                questions and provided personalized recommendations based on my 
                                energy needs. 
                            </p>
                        </div>
                    </div>

                    <div className='home-container__customer-reviews__review-group__card'>
                        <div className='home-container__customer-reviews__review-group__card__header'>
                            <img alt='image of a person' src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800' />
                            <h3>Kevin B Roma</h3>
                            <span className='spacer'></span>
                            <StarRatings rating={5} numberOfStars={5} starSpacing='2px' starDimension='18px' starRatedColor='#ffd97f' />
                        </div>
                        <div className='home-container__customer-reviews__review-group__card__body'>
                            <p>
                                I recently had [Solar Panel Company] install solar panels on my roof, and 
                                I'm extremely impressed with their service. The entire process was smooth, 
                                and their team was friendly and accommodating.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-container__why-solar'>
                <div className='home-container__why-solar__left-side-content'>
                    <div className='home-container__why-solar__left-side-content__reasons'>
                    <h1 className='home-container__why-solar__left-side-content__reasons__title'>Why go Solar?</h1>
                        <p>
                            Over 2.5 million homeowners across the country have already made the smart decision 
                            to upgrade to solar. Join the movement and see an average home value increase of 4.1%
                        </p>

                        <p>
                            Electricity prices across the country are rising at a record rate. With solar, you can 
                            save up to $30,000 and ensure your rates stay low for the next 25+ years.
                        </p>

                        <p>
                            You can save up to 26% on your Solar system through federal incentives and even more with 
                            state-specific incentives.
                        </p>
                        <Button type='fill' style={{ background: '#5FB428', marginRight: 16 }}>Get a Free Quote</Button>
                    </div>
                </div>
                <div className='home-container__why-solar__right-side-content'>
                    <img alt='solar panel' src={houseImage_01} />
                    <img alt='solar panel' src={houseImage_02} />
                    <img alt='solar panel' src={houseImage_03} />
                </div>
            </section>

            <section className='home-container__our_process'>
                <h1 className='home-container__our_process_title'>How it works</h1>
                <div className='home-container__our_process_items-group'>
                    <div className='home-container__our_process_items-group__item'>
                        <h1 className='home-container__our_process_items-group__item__step-number'>1</h1>
                        <p className='home-container__our_process_items-group__item__title'>Book an Appointment</p>
                        <p className='home-container__our_process_items-group__item__text'>Our experts will review your solar plan, quantify your savings, and answer all your questions in one quick appointment.</p>
                    </div>
                    <img alt='arrow icon' src={arrowRightIcon_01} />
                    <div className='home-container__our_process_items-group__item'>
                        <h1 className='home-container__our_process_items-group__item__step-number'>2</h1>
                        <p className='home-container__our_process_items-group__item__title'>Install the System</p>
                        <p className='home-container__our_process_items-group__item__text'>We handle your solar panel installation from start to finish, in usually two days or less.</p>
                    </div>
                    <img alt='arrow icon' src={arrowRightIcon_01} />
                    <div className='home-container__our_process_items-group__item'>
                        <h1 className='home-container__our_process_items-group__item__step-number'>3</h1>
                        <p className='home-container__our_process_items-group__item__title'>Enjoy the Perks of Solar</p>
                        <p className='home-container__our_process_items-group__item__text'>
                            Save thousands by switching to solar. Enjoy your energy savings and your 26% federal government tax credit. 
                            Additionally, enjoy our unrivaled warranty & GivePower partnership.
                        </p>
                    </div>
                </div>
            </section>

            <section className='home-container__go-solar'>
                <img className='home-container__go-solar__background-image' alt='solar panel' src={solarPanelImage_02} />
                <div className='home-container__go-solar__card'>
                    <h1 className='home-container__go-solar__title'>Go <span>Green</span>, Go Solar:</h1>
                    <h3 style={{ textAlign: 'center' }}>Join the Movement</h3>
                    <div className='home-container__go-solar__card__input-items-group'>
                        <div className='home-container__go-solar__card__input-items-group__break-group'>
                            <Input placeholder='First Name' style={{ marginBottom: 14, marginRight: 14 }} />
                            <Input placeholder='Last Name' style={{ marginBottom: 14 }} />
                        </div>
                        <div className='home-container__go-solar__card__input-items-group__break-group'>
                            <Input placeholder='Zip Code' style={{ marginBottom: 14, marginRight: 14 }} />
                            <Input placeholder='Phone Number' style={{ marginBottom: 14 }} />
                        </div>
                        <div className='home-container__go-solar__card__input-items-group__break-group'>
                            <Input placeholder='Email' style={{ marginBottom: 40 }} />
                        </div>
                    </div>
                    <Button type='fill'>Request Service</Button>
                </div>
            </section>

            <footer className='home-container__footer'>
                <p>© 2023 Boundless, Inc.</p>
            </footer>
        </div>
    )
};

export default Home;


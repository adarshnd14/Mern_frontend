import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { shop, support } from '../../data';

function Footer() {
    return (
        <div className='col mt-4 d-flex justify-content-left pb-4'
            style={{ backgroundColor: 'black' }}>
            <hr />
            <div className='col-2 d-inline-block'>
                <p style={{ textAlign: 'left', marginTop: '10px' }} className='text-secondary'><b> SUPPORT</b></p>
                {support.map((val, ind) => {
                    return <p key={ind}
                        style={{ textAlign: 'left', marginBottom: '1px' }}
                        className='text-secondary'>{val}</p>
                })}

            </div>

            <div className='col-3 d-inline-block'>
                <p style={{ textAlign: 'left', marginTop: '10px' }} className='text-secondary'><b>SHOP AND LEARN</b></p>
                {shop.map((val, ind) => {
                    return <p key={ind}
                        style={{ textAlign: 'left', marginBottom: '1px' }}
                        className='text-secondary'>{val}</p>
                })}

            </div>

            <div className='col-3 d-inline-block '>
                <p style={{ textAlign: 'center', marginTop: '10px' }} className='text-secondary'>
                    <b>EXPERIENCE MI APP ON MOBILE</b></p>

                <a href='https://play.google.com/store/apps/details?id=com.mi.global.shop'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' alt='Google play' />
                </a>

                <a href='https://apps.apple.com/in/app/mi-store/id1268565993'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' alt='Google play' />
                </a>

                <p style={{ textAlign: 'center', marginTop: '10px' }} className='text-secondary'>
                    <b>KEEP IN TOUCH</b></p>
                <div style={{ textAlign: 'center' }}>
                    <a href='https://www.facebook.com/XiaomiIndia/'>
                        <FacebookIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://twitter.com/XiaomiIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                        <TwitterIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://www.youtube.com/channel/UCCspJ6mFfCwOV4qFjZWi2wg'>
                        <YouTubeIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://www.instagram.com/xiaomiindia/?hl=en'>
                        <InstagramIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                </div>
            </div>


            <div className='col-4 d-inline-block text-left mt-2'>

                <img width={'100px'} style={{ paddingBottom: '30px' }}
                    src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png'
                    alt='original' />
                <p className='d-inline-block col-7 text-secondary' style={{ textAlign: 'left', fontSize: '20px' }}>
                    <b>100% ORIGINAL</b> guarantee for all products at mi.com</p>


                <img width={'90px'} style={{ marginTop: '-60px,', marginRight: '10px' }}
                    src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' alt='original' />
                <p className='d-inline-block col-7 text-secondary' style={{ textAlign: 'left', fontSize: '20px' }}>
                    <b>Return within 30days</b> of receiving your order</p>

            </div>

            <hr />
        </div>
    )
}

export default Footer
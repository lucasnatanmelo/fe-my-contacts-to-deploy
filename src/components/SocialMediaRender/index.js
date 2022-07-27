import PropTypes from 'prop-types';

import Facebook from '../../assets/images/socialMediaIcons/facebook.svg';
import Instagram from '../../assets/images/socialMediaIcons/instagram.svg';
import LinkedIn from '../../assets/images/socialMediaIcons/linkedin.svg';
import Orkut from '../../assets/images/socialMediaIcons/orkut.svg'; //
import Snapchat from '../../assets/images/socialMediaIcons/snapchat.svg'; //
import Twitter from '../../assets/images/socialMediaIcons/twitter.svg';
import WhatsApp from '../../assets/images/socialMediaIcons/whatsapp.svg'; //
import Youtube from '../../assets/images/socialMediaIcons/youtube.svg'; //
import Telegram from '../../assets/images/socialMediaIcons/telegram.svg';

const icons = {
    Facebook,
    Instagram,
    LinkedIn,
    Orkut,
    Snapchat,
    Twitter,
    WhatsApp,
    Youtube,
    Telegram,
};

export default function SocialMediaImage({ socialMediaType }) {
  return (
    <img src={icons[socialMediaType]} alt="social" />

  );
}

SocialMediaImage.propTypes = {
    socialMediaType: PropTypes.string,
};

SocialMediaImage.defaultProps = {
    socialMediaType: null,
};

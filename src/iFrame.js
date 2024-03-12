import { useEffect } from 'react';

const HiddenIframe = () => {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    // iframe.src = 'javascript:void(0);';
    iframe.title = 'hidden-iframe';
    iframe.onload = () => {
    //   window.history.back();
    };
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HiddenIframe;
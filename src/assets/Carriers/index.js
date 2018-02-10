import FedEx from './fedex.png';
import UPS from './ups.png';
import USPS from './usps.png';
import OnTrac from './ontrac.png';
import Unknown from './unknown.png';

const CarrierLogo = (carrier) => {
	return carrier === 'UPS' ? UPS
		: carrier === 'OnTrac' ? OnTrac
			: carrier === 'FedEx' ? FedEx
				: carrier === 'USPS' ? USPS
					: Unknown;
};

export default CarrierLogo;
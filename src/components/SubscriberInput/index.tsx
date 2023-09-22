import { useState } from "react";

const SubscriberInput = ({ onDataEntered }: any) => {
    console.log('SubscriberInput')

    const [isSubscriber, setIsSubscriber] = useState(false);

    const handleCheckboxChange = (event: any) => {
        const newValue: boolean = event.target.checked;
        setIsSubscriber(newValue); 
        onDataEntered(newValue); 
    };

    return (
        <div className="data-input-container">
            <label>
                Assinante:
                <input
                    type="checkbox"
                    checked={isSubscriber}
                    onChange={handleCheckboxChange}
                />
            </label>
        </div>
    );
};

export default SubscriberInput;

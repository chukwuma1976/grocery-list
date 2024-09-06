import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function GroceryToolTip({ id, children, title }) {
    return (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <div>{children}</div>
        </OverlayTrigger>
    )
}
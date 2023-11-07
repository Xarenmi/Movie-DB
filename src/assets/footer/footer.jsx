import Stack from 'react-bootstrap/Stack';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer(prop) {
  return (
    <Stack direction="horizontal" gap={2}>
      <div className="p-2">{prop.developer.penName}</div>
      <div className="p-2"><a href={prop.developer.gitHub}><i className="bi bi-github"></i></a></div>
    </Stack>
  );
}

export default Footer;
import IconArrowLeft from '@/components/Icons/IconArrowLeft';
import { Heading_S_Variant } from '@/components/Typography';
import { Link } from 'react-router-dom';
import style from './style.module.css';

type Props = {};

const ButtonGoBack = (props: Props) => {
  return (
    <Link to={'/'} className={style.button_go_back}>
      <IconArrowLeft />
      <Heading_S_Variant>Go back</Heading_S_Variant>
    </Link>
  );
};

export default ButtonGoBack;

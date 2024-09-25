/* eslint-disable no-useless-escape */
import clsx from 'clsx'
import { useCheckout } from './hooks/useCheckout';

export const CheckoutPage = () => {
  
  const {
    validators,actions,
    user,
    dirty,
    totalCartCost
  } = useCheckout();

  return (
    <div className='max-w-sm mx-auto'>
      <h1 className="title">Checkout</h1>
      <div className='text-xl my-3 border-b'>€ {totalCartCost}</div>

      <form className='flex flex-col gap-3' onSubmit={actions.sendOrder}>
        Your name:
        <input required type="text" name="name" placeholder='Il tuo nome' value={user.name} className={clsx({'error': !validators.nameValid && dirty})} onChange={actions.changeHandler} />
        Your email:
        <input required type="email" name="email" placeholder='La tua email' value={user.email} className={clsx({'error': !validators.emailValid && dirty})} onChange={actions.changeHandler} />
        <button className={clsx('btn', {primary: !validators.isValid, success: validators.isValid})} type='submit' disabled={!validators.isValid}>
          Confirm Order
        </button>
      </form>

    </div>
  )
}


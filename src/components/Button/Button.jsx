import { forwardRef } from 'react';
import { StyledButton } from './buttonStyle';

const Button = forwardRef(
  ({ as = 'button', children, variant, ...props }, ref) => {
    return (
      <StyledButton ref={ref} as={as} variant={variant} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;

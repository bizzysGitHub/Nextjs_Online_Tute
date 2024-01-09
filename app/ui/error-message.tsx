
import { State } from '../lib/actions'



// type errorId = 'customer-error' | 'invoice-error' | 'status-error'
type Props ={
    errorId : 'customer-error' | 'invoice-error' | 'status-error',
    errorState:State
}


export const ErrorMessage = ({ errorId, errorState} : Props )  => {

    const { errors } = errorState;
    const ErrorOptions = {
        'customer-error': errors?.customerId,
        'invoice-error': errors?.amount,
        'status-error': errors?.status
    }

    return (
        <>
            {
                errorId in ErrorOptions &&
                <div id={errorId} aria-live="polite" aria-atomic="true">
                    {
                        ErrorOptions[errorId] &&
                        ErrorOptions[errorId]?.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            }
        </>
    )
}

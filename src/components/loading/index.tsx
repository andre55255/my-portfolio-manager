import { Spinner, SpinnerContainer } from "./styled";

type LoadingProps = {
    isFetching: boolean;
};

export default function Loading({ isFetching }: LoadingProps) {
    if (isFetching) {
        return (
            <SpinnerContainer>
                <Spinner />
            </SpinnerContainer>
        );
    }
    else {
        return <></>
    }
}

import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunc: any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunc);

    const mutate = (payload: any) => {
        setPending(true);
        return apiMutation(payload)
          .finally(() => setPending(false))
          .then((result) => {
            return result;
          })
          .catch((error) => {
            throw error
          });
    };

    return {
        mutate,
        pending
    }
};
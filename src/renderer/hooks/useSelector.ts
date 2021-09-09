/* eslint-disable import/prefer-default-export */
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = _useSelector;

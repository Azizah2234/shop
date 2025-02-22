import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {CounterReducers} from './counter.reducer'

export interface State {
  
}

export const reducers: ActionReducerMap<State> = {
  counter : CounterReducers

};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

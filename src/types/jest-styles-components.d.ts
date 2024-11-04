import { NewPlugin } from 'pretty-format'
import { css } from 'styled-components'
declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol
      sample?: string | RegExp | object | Array<string | number> | ((...args: unknown[]) => unknown); //modifiquei essa linha

    }
    type Value = string | number | RegExp | AsymmetricMatcher | undefined
    interface Options {
      media?: string
      modifier?: string | ReturnType<typeof css>
      supports?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}
export interface StyledComponentsSerializerOptions {
  addStyles?: boolean
  classNameFormatter?: (index: number) => string
}
export declare const styleSheetSerializer: NewPlugin & {
  setStyleSheetSerializerOptions: (
    options?: StyledComponentsSerializerOptions
  ) => void
}
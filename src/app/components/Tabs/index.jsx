import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { useUpdateEffect } from "react-use"

import style from "./style.module.scss"
import Divider from "../Divider";
import ScrollArea from "../ScrollArea";

const Container = ({ className, children, dividerClassName, tabNameClassActive }) => {
  const getSelected = () => {
    let selected = 0

    React.Children.forEach(children, (tab, index) => {
      if (tab.props.selected) {
        selected = index
      }
    })
    return selected
  }

  const selected = getSelected()
  const [activeTab, setActive] = useState(getSelected)
  const tabs = React.Children.map(children, (el) => el && el.props && el.props)

  useUpdateEffect(() => {
    if (selected !== activeTab) {
      setActive(selected)
    }
  }, [selected])

  useEffect(() => {
    React.Children.forEach(children, (tab, index) => {
      if (index === activeTab && tab.props.onSelect) {
        tab.props.onSelect()
      }
    })
  }, [activeTab])

  return (
    <div className={className}>
      <div className={classNames(style.tabNamesWrapper)}>
        {tabs &&
          tabs.map((tab, index) => (
           <>
            <div
              className={classNames("tab-item text text--big", style.tabName, {
                [style.tabNameActive]: index === activeTab,
                [tabNameClassActive]: index === activeTab
              })}
              onClick={() => setActive(index)}
              key={tab.title}
            >
              {tab.title}
            </div>
            {index !== (tabs.length - 1) && <Divider extraClassName={dividerClassName} vertical/>}
           </>
          ))}
      </div>
      <div className={classNames("tab-content", style.tabsWrapper)}>
        {React.Children.map(children, (tab, index) => (
          <div
            className={classNames(style.tab, {
              [style.tabActive]: index === activeTab
            })}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  )
}

const Tab = ({ children }) => {
  return <ScrollArea enableLibScroll={false} className={style.tabScroll}>{children}</ScrollArea>
}

export const Tabs = {
  Container,
  Tab
}

export default Tabs;

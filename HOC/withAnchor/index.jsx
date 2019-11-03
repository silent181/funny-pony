import React from 'react';
import { throttle, isFunction } from 'lodash';

import { getScrollTop, isSCrollToEnd } from '../../utils/dom';

/**
 * 
 * correctionFactor：校正因子，使点击之后窗口多滚动1-2像素。若不这样做，在window.scroll后无法正确定位到当前的tab
 * 暴露出去的props:
 * selectedTabIndex
 * onTabClick
 * onTabContentRendered
 */
const withAnchor = ({
    anchorOffsetTop,
    correctionFactor = 2
}) => WrappedComponent => (
    class WithAnchor extends React.Component {

        tabContent = [];
        state = { 
            selectedTabIndex: 0
        };

        componentWillUnmount() {
            isFunction(this.handleScroll) && window.removeEventListener(this.handleScroll)
        }

        bindScrollEvents = () => {
            this.handleScroll = throttle(() => {
                const positionList = this.tabContent.map(item => {
                    return {
                        top: item.getBoundingClientRect().top,
                        height: item.getBoundingClientRect().height
                    }
                });
                const currentTabIndex = this.getCurrentIndex(positionList);
                if (!(currentTabIndex >= 0)) {
                    return;
                } 
                this.setState({
                    selectedTabIndex: currentTabIndex > 0 ? currentTabIndex : 0
                })
            }, 200);
            window.addEventListener('scroll', this.handleScroll)
        }

        getCurrentIndex = list => {
            if (isSCrollToEnd()) {
                return list.length - 1;
            }
            return list.findIndex(({ top, height }) => top > anchorOffsetTop - height && top <= anchorOffsetTop);
        }

        handleTabClick = index => {
            const tabContent = this.tabContent;
            if (!tabContent.length) {
                return;
            }
            const curTabDom = tabContent[index];
            const curOffsetTop = curTabDom.getBoundingClientRect().top;
            const top = getScrollTop() + curOffsetTop - anchorOffsetTop + correctionFactor;
            window.scroll(0, top);
        }

        handleTabContentRendered = tabContentList => {
            this.tabContent = tabContentList; // FIXME: 挂载dom实例，这种写法不好，后续可优化
            this.bindScrollEvents();
        }

        render() {
            const { tabContentRef, onTabClick, ...passThroughProps } = this.props;

            return <WrappedComponent
                selectedTabIndex={this.state.selectedTabIndex}
                onTabClick={this.handleTabClick}
                onTabContentRendered={this.handleTabContentRendered}
                {...passThroughProps}
            />
        }
    }
)

export default withAnchor
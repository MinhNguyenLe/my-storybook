import Tag from 'antd/lib/tag';
import React from 'react';

// TODO refactor into typescript by @thienduy.cao
const TagByServiceType = (task) => (
  <div>
    {task?.isPremium ? (
      <Tag
        color="#e6ae24"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>Premium</strong>
      </Tag>
    ) : null}

    {task?.isTetBooking ? (
      <Tag
        color="#FA8072"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>Tet Booking</strong>
      </Tag>
    ) : null}

    {task?.fromPartner ? (
      <Tag
        color="#00BFFF"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>
          <T>{`common.${task?.fromPartner}`}</T>
        </strong>
      </Tag>
    ) : null}

    {task?.scheduleId ? (
      <Tag
        color="#52c41a"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>
          <T>Schedule</T>
        </strong>
      </Tag>
    ) : null}

    {task?.subscriptionId ? (
      <Tag
        color="#1BB55C"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>
          <T>Subscription</T>
        </strong>
      </Tag>
    ) : null}

    {!task?.fromPartner &&
    !task?.isTetBooking &&
    !task?.isPremium &&
    !task?.subscriptionId &&
    !task?.scheduleId ? (
      <Tag
        color="#CDCDB4"
        style={{
          color: '#FFFFFF',
          marginTop: 8,
        }}
      >
        <strong>Normal</strong>
      </Tag>
    ) : null}
  </div>
);

export default TagByServiceType;

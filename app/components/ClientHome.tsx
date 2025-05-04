"use client";
import '@/lib/i18n';

import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useTransfersListStore, useTransfersDetailsStore } from '@/stores/useStore';

interface ClientHomeProps {
    transfersListData: any;
    transfersDetailsData: any;
}

export default function ClientHome({ transfersListData, transfersDetailsData }: ClientHomeProps) {
    const { t } = useTranslation(['common', 'guest']);

    const setTransfersList = useTransfersListStore((state) => state.setTransfersList);
    const setTransfersDetails = useTransfersDetailsStore((state) => state.setTransfersDetails);

    useEffect(() => {
        setTransfersList(transfersListData);
        setTransfersDetails(transfersDetailsData);
    }, [transfersListData, transfersDetailsData, setTransfersList, setTransfersDetails]);

    return (
        <div>
            <h1>{t('common.transfer.plural')}</h1>
        </div>
    );
}

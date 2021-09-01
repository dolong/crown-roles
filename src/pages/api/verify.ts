import { NextApiRequest, NextApiResponse } from 'next';
import { utils } from 'ethers';
import { SIGNATURE_TEXT } from '@app/features/useSignature';
import { getLoginURL  } from '@server/services/Discord';
import { getBagsInWallet } from 'loot-sdk';
import prisma from '@server/helpers/prisma';

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const { signature, account }: { signature?: string; account?: string } =
    req.query;
  if (!signature || !account)
    return res.status(400).json({ error: 'Missing signature or account' });
  const verified =
    account.toLowerCase() ==
    utils.verifyMessage(SIGNATURE_TEXT, signature).toLowerCase();
  if (verified) {
    const bags = await getBagsInWallet(account.toLowerCase());
    console.log(bags)
    const filteredBags = bags.filter(bag =>
      bag.head.toLowerCase().includes('crown')
    );
    if (filteredBags.length > 0) {
      let [user] = await prisma.user.findMany({
        where: { address: account.toLowerCase() }
      });
      if (!user) {
        user = await prisma.user.create({
          data: { address: account.toLowerCase() }
        });
      }

      //check if user in server
      //await getRolesForUser (user.id)
      
      return res.redirect(getLoginURL(user.id));
    } else return res.redirect('/unauthorized');
  } else return res.redirect('/unauthorized');
};

export default api;
